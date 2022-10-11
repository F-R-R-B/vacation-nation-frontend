import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render () {
    return (
      <div className='grow text-gray-700'>
        <img className="max-h-96 w-full object-cover object-center shadow-xl" src="https://via.placeholder.com/1080x480/0c4a6e/ECFDF5?text=HERO" alt='placeholder'></img>
        <div className="h-72 grid grid-cols-2 place-items-center place-content-center bg-cyan-200">
          <div className="px-8"> 
            <h1 className="w-fit font-extrabold text-4xl drop-shadow-xl text-orange-500">Vacation Nation</h1>
            <h2 className="mb-6 w-fit font-bold text-2xl drop-shadow-lg text-slate-800">Your one-stop station for all your <span className="text-orange-500">Vacation</span> needs<span className="text-orange-500">.</span></h2>
            <p>Don't let the hassle of trip-planning get in the way of you getting some well-deserved restpite. Give us a destination and some dates, and we'll do the rest!</p>
          </div>
          
          <div className="flex flex-col items-center gap-2" >
            <p>Paradise is only a click away!</p>
            <Link className="rounded-md shadow-lg py-2 px-4 bg-cyan-700 text-teal-100 hover:-translate-y-0.5 hover:bg-cyan-800">GET STARTED NOW</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;