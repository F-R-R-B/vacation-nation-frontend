import axios from "axios";
import { Component } from "react";
import { withAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";
import SearchForm from "./SearchForm";
import FlightCard from "./FlightCard";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
      results: null,
    };
  }

  auth0 = this.props.auth0;

  saveFlight = async (flightIdx, nickname, notes) => {
    
    console.log('trying to saveFlight at Search');


    console.log(flightIdx);
    const flight = this.state.results[flightIdx];
    const { user } = this.auth0;
    let data = {
      nickname: nickname,
      notes: notes,
      user: user.email,
      origin: this.state.search.origin,
      destination: this.state.search.destination,
      price: flight.price,
      departure: {
        date: flight.departure.date,
        airline: flight.departure.airline,
        stops: flight.departure.stops,
        overnight: flight.departure.overnight,
        departureTime: flight.departure.departureTime,
        arrivalTime: flight.departure.arrivalTime,
      },
      return: {
        date: flight.return.date,
        airline: flight.return.airline,
        stops: flight.return.stops,
        overnight: flight.return.overnight,
        departureTime: flight.return.departureTime,
        arrivalTime: flight.return.arrivalTime,
      }
    }
    
    let headers;
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      headers = { "Authorization": `Bearer ${jwt}` }
    }
    
    try {
      let response = await axios.post(`${process.env.REACT_APP_BACKEND}/saved`, data, {headers: headers});
      console.log(response);
    } catch (error) {
      console.log("error posting new book");
    }
  };

  handleSearch = async (data) => {
    this.setState({ search: data });
    let headers;
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      headers = { "Authorization": `Bearer ${jwt}` }
    }
    try {
      let originAPI = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${data.origin}&format=json`;
      let originResponse = await axios.get(originAPI);
      let destinationAPI = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${data.destination}&format=json`;
      let destinationResponse = await axios.get(destinationAPI);
      
      const searchResponse = await axios.get(`${process.env.REACT_APP_BACKEND}/flights?originlat=${originResponse.data[0].lat}&originlon=${originResponse.data[0].lon}&destinationlat=${destinationResponse.data[0].lat}&destinationlon=${destinationResponse.data[0].lon}&departureDate=${data.departDate}&returnDate=${data.returnDate}
      `, {headers: headers});
      const searchResults = searchResponse.data
      console.log("🚀 ~ file: Search.js ~ line 59 ~ Search ~ handleSearch= ~ data", data);
      
      this.setState({results:searchResults})
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { isAuthenticated, isLoading } = this.auth0;

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return ( isAuthenticated &&
      <div className="p-6">
        <SearchForm handleSearch={this.handleSearch} />
        <div className="m-3 flex flex-wrap justify-evenly gap-12">
          {this.state.results &&
            this.state.results.map((result, idx) => {
              return <FlightCard data={result} key={idx} idx={idx} saveFlight={this.saveFlight}/>;
            })}
        </div>
      </div>
    );
  }
}

export default withAuthenticationRequired(withAuth0(Search), {
  onRedirecting: () => <Loading />,
});