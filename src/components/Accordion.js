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
  render () {
    return (
      <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id={`flush-heading${this.props.i}`}>
          <button 
            className="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-cyan-50 border-0 rounded-none transition focus:outline-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#flush-collapse${this.props.i}`}
            aria-expanded="false" 
            aria-controls={`flush-collapse${this.props.i}`}>
            {this.props.title}
          </button>
        </h2>
        <div id={`flush-collapse${this.props.i}`} className="accordion-collapse border-0 collapse"
          aria-labelledby={`flush-heading${this.props.i}`} data-bs-parent="#accordionFlushExample">
          <div className="accordion-body py-4 px-5">
            <h1 className="font-semibold text-2xl"> {this.props.title} </h1>
            <p> {this.props.bodyText} </p>
            <button onClick={this.props.deleteTrip}>Delete Trip?</button>
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
//     focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
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