import axios from 'axios';
import './App.css';

function App() {

  
  const get = async() => {
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

  const res = get();
  console.log("🚀 ~ file: test.mjs ~ line 19 ~ res", res);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
