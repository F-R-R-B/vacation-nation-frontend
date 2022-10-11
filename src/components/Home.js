import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render () {
    return (
      <div className='text-gray-700'>
        <img className="max-h-96 w-full object-cover object-center shadow-xl" src="hero.avif" alt='placeholder'></img>
        <div className="md:h-96 md:grid grid-cols-2 place-items-center place-content-center grow">
          <div className="my-12 px-12"> 
            <h1 className="w-fit font-extrabold text-5xl text-orange-500 drop-shadow-2xl">Vacation Nation</h1>
            <h2 className="mb-6 w-fit font-bold text-2xl text-slate-800 drop-shadow-lg">Your one-stop station for all your <span className="text-orange-500">Vacation</span> needs<span className="text-orange-500">.</span></h2>
            <p className="font-semibold">Don't let the hassle of trip-planning get in the way of you getting some well-deserved restpite. Give us a destination and some dates, and we'll do the rest!</p>
          </div>
          
          <div className="my-12 px-12 flex flex-col items-start md:items-center gap-2" >
            <p className="font-semibold text-lg text-gray-600">Paradise is only a click away!</p>
            <Link to='search' className="rounded-md shadow-lg py-2 px-4 bg-cyan-700 text-teal-100 hover:-translate-y-0.5 hover:bg-cyan-800">GET STARTED NOW</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;