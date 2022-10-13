import { Component } from "react";
import 'tw-elements';

class Accordion extends Component {
  render () {
    return (
      <div className="accordion accordion-flush my-3 drop-shadow-xl" id="accordionFlushExample">
        {this.props.children}
      </div>
    );
  }
}

class AccordionItem extends Component {

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  render () {
    const trip = this.props.trip;

    return (
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-gray-50 border border-gray-200">
        <h2
          className="accordion-header mb-0"
          id={`flush-heading${this.props.i}`}>
          <button
            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-grey-50 border-0 rounded-none transition focus:outline-none focus:text-sky-600"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${this.props.i}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${this.props.i}`}>
            {trip.nickname ? this.capitalize(trip.nickname) : `${this.capitalize(trip.origin)} - ${this.capitalize(trip.destination)}` }
          </button>
        </h2>
        <div
          id={`flush-collapse${this.props.i}`}
          className="accordion-collapse border-0 collapse"
          aria-labelledby={`flush-heading${this.props.i}`}
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body py-4 px-5">
            <div className="flex justify-around m-3">
              <div className="text-center">
                <h5 className="text-slate-800 text-xl font-semibold mb-2">
                  {this.capitalize(trip.origin)} to{" "}
                  {this.capitalize(trip.destination)}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {trip.departure.date}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {trip.departure.departureTime} - {trip.departure.arrivalTime}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {trip.departure.airline} - {trip.departure.stops} Stop(s)
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {trip.departure.overnight && (
                    <span className="italic">**Overnight**</span>
                  )}
                </p>
              </div>
              <div className="border-l"></div>
              <div className="text-center">
                <h5 className="text-slate-800 text-xl font-semibold mb-2">
                  {this.capitalize(trip.destination)} to{" "}
                  {this.capitalize(trip.origin)}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  {trip.return.date}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {trip.return.departureTime} - {trip.return.arrivalTime}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {trip.return.airline} - {trip.return.stops} Stop(s)
                </p>
                <p className="text-gray-700 text-base mb-4">
                  {trip.return.overnight && (
                    <span className="italic">**Overnight**</span>
                  )}
                </p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <h5 className="text-slate-800 text-xl font-semibold mb-2">
                Notes:
              </h5>
              <p className="text-gray-700 text-base mb-4">
                {trip.notes}
              </p>
            </div>
            <hr className="mb-4"/>
            <div className="flex justify-between align-middle mx-3">
              <p className="text-lg text-sky-700 font-bold"> ${trip.price} </p>
              <button
                onClick={this.props.deleteTrip}
                className="px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
                Delete Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Accordion, AccordionItem };
