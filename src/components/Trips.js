import { Component } from "react";
import { Accordion, AccordionItem } from './Accordion'
import { withAuth0 } from '@auth0/auth0-react';
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

  getTrips = async() => {
    try {
      // const res = await axios.get(`${SERVER}/trips`);
      // const trips = res.data;
      const flights = await axios.get(`${process.env.REACT_APP_BACKEND}/saved`);
      console.log("🚀 ~ file: Trips.js ~ line 20 ~ Trips ~ getTrips=async ~ trips", flights);
      return flights;
    } catch (error) {
      console.log("🚀 ~ file: Trips.js ~ line 23 ~ Trips ~ getTrips=async ~ error", error);
    }
  }

  deleteTrip = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND}/saved/${id}`);
      let filteredTrips = this.state.trips.filter((trip) => {
        return trip._id !== id;
      });
      this.setState({ trips: filteredTrips });
    } catch (error) {
      console.log('delete trip error', error);
    }
  } 

  async componentDidMount() {
    try {
      const trips = await this.getTrips();
      console.log("🚀 ~ file: Trips.js ~ line 70 ~ Trips ~ componentDidMount ~ trips", trips);
      this.setState({ trips: trips.data })
    } catch (error) {
      console.log("🚀 ~ file: Trips.js ~ line 73 ~ Trips ~ componentDidMount ~ error", error);
      
    }
  }

  render () {
    const { isAuthenticated } = this.props.auth0
    console.log(this.state);
    return ( isAuthenticated ?
      <div className='mx-auto my-6 px-6 max-w-screen-lg'>
        <h1 className="my-6 font-bold text-3xl text-center">Your Trips</h1>
        <Accordion>
          {this.state.trips && this.state.trips.map((v, i) => 
            <AccordionItem 
              key={v._id}
              i={i}
              title={v.origin}
              bodyText={v.price}
              deleteTrip={() => this.deleteTrip(v._id)}>
            </AccordionItem>
          )}
          
        </Accordion>
      </div> :
      <div className='mx-auto my-6 px-6 h-96 max-w-screen-lg grid place-content-center font-bold text-gray-700 text-2xl' >
        <div>Log in now to use this feature!</div>
      </div>
    );
  }
}

export default withAuth0(Trips);