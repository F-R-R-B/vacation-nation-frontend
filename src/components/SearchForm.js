import { Component } from "react";
import "tw-elements";

class Main extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const data ={
      origin: e.target.origin.value,
      destination: e.target.destination.value,
      departDate: e.target.departDate.value,
      returnDate: e.target.returnDate.value,
    }
    // console.log(data);
    this.props.handleSearch(data);
  }

  render () {
    return (
      <div>
        <div className="block p-6 rounded-lg shadow-lg bg-white">
          <form onSubmit={this.handleSubmit}>
            <div className="grid grid-cols-5 gap-4">
              <div className="form-group mb-6" id="origin-div">
                <input
                  type="text"
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="origin"
                  name="origin"
                  aria-describedby="emailHelp123"
                  placeholder="Origin"
                />
              </div>
              <div className="form-group mb-6" id="dest-div">
                <input
                  type="text"
                  className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="destination"
                  aria-describedby="emailHelp124"
                  placeholder="Destination"
                />
              </div>

              <div className="form-group mb-6" id="depart-div">
                <div className="flex items-center justify-center">
                  <input type="date" id="departDate" name="departure" />
                </div>
              </div>
              <div className="form-group mb-6" id="return-div">
                <div className="flex items-center justify-center">
                  <input type="date" id="returnDate" name="return" />
                </div>
              </div>
              <button
                type="submit"
                className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
              >
                GET VACATED
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;