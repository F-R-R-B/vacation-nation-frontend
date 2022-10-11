import { Component } from "react";
import { Accordion, AccordionItem } from './Accordion'
import 'tw-elements';
import axios from "axios";
import Data from '../data'

console.log(Data);

const SERVER = process.env.REACT_APP_SERVER;
console.log('delete lol',SERVER)

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
  }

  getFlights = async() => {
    const depAirport = 'SEA';
    const arrAirport = 'VPS';
    const dep = '2022-11-13';
    const arr = '2022-11-20';

    const API_KEY = '63449405305b47e49ad6a37d';
  
    const baseUrl = 'https://api.flightapi.io/roundtrip';
    const extension = '1/0/0/Economy/USD';
    const url = `${baseUrl}/${API_KEY}/${depAirport}/${arrAirport}/${dep}/${arr}/${extension}`
    console.log('lol delete', url);
    try {
      const locationurl = 'https://us1.locationiq.com/v1/search?key=pk.73569dbb47c4984489b6e5efc1229ebf&q=seattle&format=json';
      const location = await axios.get(locationurl);
      console.log("🚀 ~ file: Trips.js ~ line 33 ~ Trips ~ getFlights=async ~ location", location);
      
      // const response = await axios.get(url);
      
      const data = Data;
      console.log("🚀 ~ file: Trips.js ~ line 33 ~ Trips ~ getFlights=async ~ data", data);
      
      // const data = response.data;
      const flights = data.trips;
      
      const legs = data.legs;
      const fares = data.fares;
      
      const results = flights.map(el => {
        const newTrip = ({
          id: el.id, 
          departure: legs.find(leg => leg.id === el.legIds[0]).departureDateTime, 
          arrival: legs.find(leg => leg.id === el.legIds[1]).arrivalDateTime, 
          price: fares.find(fare => fare.tripId === el.id).price.totalAmount
        });
        // console.log("🚀 ~ file: test.js ~ line 15 ~ nonstop ~ newTrip", newTrip);
        return newTrip;
      } );
      // console.log("🚀 ~ file: test.js ~ line 7 ~ results", results);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  getTrips = async() => {
    try {
      // const res = await axios.get(`${SERVER}/trips`);
      // const trips = res.data;
      const flights = await this.getFlights();
      console.log("🚀 ~ file: Trips.js ~ line 20 ~ Trips ~ getTrips=async ~ trips", flights);
      return flights;
    } catch (error) {
      console.log("🚀 ~ file: Trips.js ~ line 23 ~ Trips ~ getTrips=async ~ error", error);
    }
  }

  async componentDidMount() {
    try {
      const trips = await this.getTrips();
      console.log("🚀 ~ file: Trips.js ~ line 70 ~ Trips ~ componentDidMount ~ trips", trips);
      this.setState({ trips: trips })
    } catch (error) {
      console.log("🚀 ~ file: Trips.js ~ line 73 ~ Trips ~ componentDidMount ~ error", error);
      
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.startDate)
  }
  
  render () {
    console.log(this.state);
    return (
      <div className='mx-auto my-6 px-6 max-w-screen-lg'>
        <h1 className="my-6 font-bold text-3xl text-center">Your Trips</h1>
        <Accordion>
          {this.state.trips && this.state.trips.map((v, i) => 
            <AccordionItem 
              key={v.id}
              i={i}
              title={v.id}
              bodyText={v.price}>
            </AccordionItem>
          )}
          
        </Accordion>
      </div>
    );
  }
}

export default Trips;