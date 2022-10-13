import axios from "axios";
import { Component } from "react";
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

  saveFlight = async (flightIdx) => {
    console.log(flightIdx);
    let data ={
      origin: this.state.search.origin,
      destination: this.state.search.destination,
      price: this.state.results[flightIdx].price
    }
    
    try {
      let response = await axios.post(`${process.env.REACT_APP_BACKEND}/saved`, data);
      console.log(response);
    } catch (error) {
      console.log("error posting new book");
    }
  };

  handleSearch = async (data) => {
    this.setState({ search: data });
    try {
      let originAPI = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${data.origin}&format=json`;
      let originResponse = await axios.get(originAPI);
      let destinationAPI = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${data.destination}&format=json`;
      let destinationResponse = await axios.get(destinationAPI);
      
      const searchResponse = await axios.get(`${process.env.REACT_APP_BACKEND}/flights?originlat=${originResponse.data[0].lat}&originlon=${originResponse.data[0].lon}&destinationlat=${destinationResponse.data[0].lat}&destinationlon=${destinationResponse.data[0].lon}&departureDate=${data.departDate}&returnDate=${data.returnDate}
      `);
      const searchResults = searchResponse.data
      
      this.setState({results:searchResults})
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div>
        <SearchForm handleSearch={this.handleSearch} />
        <div className="m-3 flex justify-between">
          {this.state.results &&
            this.state.results.map((result, idx) => {
              return <FlightCard data={result} idx={idx} saveFlight={() => this.saveFlight(idx)}/>;
            })}
        </div>
      </div>
    );
  }
}

export default Search;