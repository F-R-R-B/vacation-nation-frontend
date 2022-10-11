import Data from './data.json' assert {type: 'json'};




const depAirport = 'SEA';
const arrAirport = 'ORD';
const dep = '2022-11-13';
const arr = '2022-11-20';

const baseUrl = 'https://api.flightapi.io/roundtrip/63449405305b47e49ad6a37d';
const extension = '1/0/0/Economy/USD';
const url = `${baseUrl}/${depAirport}/${arrAirport}/${dep}/${arr}/${extension}`

const get = async() => {
  const axios = require('axios');
  try {
    
    const data = await axios.get(url);
    // console.log("🚀 ~ file: test.mjs ~ line 15 ~ get ~ response", response);
    
    // const data = response;
    
    const flights = data.trips;
    console.log("🚀 ~ file: test.mjs ~ line 20 ~ get ~ flights", flights);
    
    const legs = data.legs;
    const fares = data.fares;
    // console.log("🚀 ~ file: test.js ~ line 4 ~ flights", flights);
    
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
    // console.log("🚀 ~ file: test.js ~ line 7 ~ nonstop", nonstop);
    return results;
  } catch (error) {
    console.log(error);
  }
}

const res = get();
console.log("🚀 ~ file: test.mjs ~ line 19 ~ res", res);




