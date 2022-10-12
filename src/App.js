import { Component } from 'react';
import axios from 'axios';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Trips from './components/Trips';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react:'
// import Auth0ProviderRedirect from './auth/Auth0ProviderRedirect';

class App extends Component {
  

  getFlights = async() => {
    const depAirport = 'SEA';
    const arrAirport = 'VPS';
    const dep = '2022-11-13';
    const arr = '2022-11-20';

    const API_KEY = '63449405305b47e49ad6a37d';
  
    const baseUrl = 'https://api.flightapi.io/roundtrip';
    const extension = '1/0/0/Economy/USD';
    const url = `${baseUrl}/${API_KEY}/${depAirport}/${arrAirport}/${dep}/${arr}/${extension}`
    try {
      
      const response = await axios.get(url);
      
      // const data = response;
      const data = response.data;
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
      console.log("🚀 ~ file: test.js ~ line 7 ~ results", results);
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className='relative flex flex-col bg-cyan-100' style={{'minHeight': '100vh'}}> 
        {/* <Router > */}
          {/* <Auth0ProviderRedirect> */}
            <Header />
            <div className='mb-auto'>
              <Routes>

                <Route index element={ <Home /> }></Route>

                <Route
                  exact path="/search" 
                  element={<Search />}>
                </Route>

                <Route
                  exact path="/trips" 
                  element={<Trips />}>
                </Route>

                <Route
                  exact path="/about" 
                  element={<About />}>
                </Route>
                
                <Route // protected
                  exact path="/profile" 
                  element={<Profile />}>
                </Route>

              </Routes>
            </div>
            <Footer />
          {/* </Auth0ProviderRedirect> */}
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
