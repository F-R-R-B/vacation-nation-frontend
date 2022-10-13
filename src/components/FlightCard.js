import { Component } from "react";
import "tw-elements";

class FlightCard extends Component{

  // handleClick = (e) => {
  //   this.props.saveFlight(e.target.id)
  // }

  render() {
    return (
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300">Flight {this.props.idx +1}</div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Departure</h5>
            <p className="text-gray-700 text-base mb-4">
              Airline: {this.props.data.departure.airline}
              <br />
              Stops: {this.props.data.departure.stops}
            </p>
            <h5 className="text-gray-900 text-xl font-medium mb-2">Return</h5>
            <p className="text-gray-700 text-base mb-4">
              Airline: {this.props.data.arrival.airline}
              <br />
              Stops: {this.props.data.arrival.stops}
            </p>
            <p className="text-gray-700 text-base mb-4">${this.props.data.price}</p>
            <button
              id={this.props.idx}
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={this.props.saveFlight}
            >
              Save Flight
            </button>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-400">
            vacatioNation
          </div>
        </div>
      </div>
    );
  }
}

export default FlightCard;