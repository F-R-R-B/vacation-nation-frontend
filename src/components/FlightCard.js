import { Component } from "react";
import "tw-elements";

class FlightCard extends Component{

  // handleClick = (e) => {
  //   this.props.saveFlight(e.target.id)
  // }

  render() {
    const data = this.props.data;
    return (
      <div className="w-80 rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div className="py-3 px-6 border-b border-gray-300 font-bold text-2xl text-slate-800">Flight {this.props.idx +1}</div>
        <div className="p-6">
          <div>
            <h5 className="text-slate-800 text-xl font-semibold mb-2">Departure</h5>
            <p className="text-gray-700 text-base mb-4">
              {data.departure.date}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {data.departure.departureTime} - {data.departure.arrivalTime}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {data.departure.airline} - {data.departure.stops} Stop(s){data.departure.overnight && <span> - <span className='italic'>**Overnight**</span></span>}
            </p>
          </div>
          <div>
            <h5 className="text-slate-800 text-xl font-semibold mb-2">Return</h5>
            <p className="text-gray-700 text-base mb-4">
              {data.return.date}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {data.return.departureTime} - {data.return.arrivalTime}
            </p>
            <p className="text-gray-700 text-base mb-4">
              {data.return.airline} - {data.return.stops} Stop(s){data.return.overnight && <span> - <span className='italic'>**Overnight**</span></span>}
            </p>
          </div>
          <p className="mb-4 font-bold text-gray-700 text-xl italic">${data.price}</p>
          <button
            id={this.props.idx}
            type="button"
            className=" inline-block px-6 py-2.5 bg-sky-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={this.props.saveFlight}
          >
            Save Flight
          </button>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-400">
          VacationNation
        </div>
      </div>
    );
  }
}

export default FlightCard;