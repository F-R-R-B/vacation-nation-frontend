import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search';
import Trips from './components/Trips';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  
  const getFlights = async() => {
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

  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>

      <Router >
        <Header />
        <div className='mb-auto'>
          <Routes>
            <Route index element={ <Home /> }></Route>
            <Route
              exact path="/search" 
              element={<Search
                  
              />}>
            </Route>
            <Route
              exact path="/trips" 
              element={<Trips
                
              />}>
            </Route>
            <Route
              exact path="/about" 
              element={<About
                
              />}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
