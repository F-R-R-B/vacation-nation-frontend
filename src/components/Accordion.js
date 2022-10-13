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
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2
          className="accordion-header mb-0"
          id={`flush-heading${this.props.i}`}
        >
          <button
            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-grey-50 border-0 rounded-none transition focus:outline-none focus:text-sky-600"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${this.props.i}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${this.props.i}`}
          >
            {this.capitalize(trip.origin)} - {this.capitalize(trip.destination)}
          </button>
        </h2>
        <div
          id={`flush-collapse${this.props.i}`}
          className="accordion-collapse border-0 collapse"
          aria-labelledby={`flush-heading${this.props.i}`}
          data-bs-parent="#accordionFlushExample"
        >
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
                  {trip.departure.overnight && (
                    <span>
                      {" "}
                      - <span className="italic">**Overnight**</span>
                    </span>
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
                  {trip.return.overnight && (
                    <span>
                      {" "}
                      - <span className="italic">**Overnight**</span>
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex justify-between align-middle mx-3">
              <p className="text-lg text-sky-700 font-bold"> ${trip.price} </p>
              <button
                onClick={this.props.deleteTrip}
                className="px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              >
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





// <div class="accordion accordion-flush" id="accordionFlushExample">
//   <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
//     <h2 class="accordion-header mb-0" id="flush-headingOne">
//       <button class="accordion-button
//     relative
//     flex
//     items-center
//     w-full
//     py-4
//     px-5
//     text-base text-gray-800 text-left
//     bg-white
//     border-0
//     rounded-none
//     transition
//     focus:outline-none" type="button" trip-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
//         aria-expanded="false" aria-controls="flush-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
//       aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//       <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
//         demonstrate
//         the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
//     </div>
//   </div>
//   <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
//     <h2 class="accordion-header mb-0" id="flush-headingTwo">
//       <button class="accordion-button
//     collapsed
//     relative
//     flex
//     items-center
//     w-full
//     py-4
//     px-5
//     text-base text-gray-800 text-left
//     bg-white
//     border-0
//     rounded-none
//     transition
//     focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
//         aria-expanded="false" aria-controls="flush-collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
//       data-bs-parent="#accordionFlushExample">
//       <div class="accordion-body py-4 px-5">Placeholder content for this accordion, which is intended to
//         demonstrate
//         the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this
//         being
//         filled with some actual content.</div>
//     </div>
//   </div>
  
// </div>