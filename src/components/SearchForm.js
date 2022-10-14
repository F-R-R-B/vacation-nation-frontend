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
      <div className="mt-3 mb-12">
        <div className="block px-8 py-4 mx-3 rounded-lg shadow-lg bg-white">
          <form onSubmit={this.handleSubmit}>
            <div className="flex w-full justify-between items-center lg:grid grid-cols-5 gap-4">
              <div className="col-span-2 w-96 lg:flex lg:w-full justify-center gap-x-4">
                <div className="form-group grow" id="origin-div">
                  <input
                    type="text"
                    className="form-control block my-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="origin"
                    name="origin"
                    aria-describedby="emailHelp123"
                    placeholder="Origin"
                  />
                </div>
                <div className="form-group grow" id="dest-div">
                  <input
                    type="text"
                    className="form-control block my-2 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="destination"
                    aria-describedby="emailHelp124"
                    placeholder="Destination"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:flex lg:w-full justify-center gap-x-4">
                <div className="form-group grow" id="depart-div">
                  <div className="flex items-center justify-center">
                    <input
                      type="date"
                      id="departDate"
                      name="departure"
                      className="form-control block mb-2 lg:mb-0 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="form-group grow" id="return-div">
                  <div className="flex items-center justify-center">
                    <input
                      type="date"
                      id="returnDate"
                      name="return"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group hidden w-48 sm:block mx-auto" id="return-div">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sky-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
                  EXPLORE
                </button>
              </div>
            </div>
            <div className="form-group sm:hidden w-36  mx-auto" id="return-div">
                <button
                  type="submit"
                  className=" w-full mt-4 px-4 py-3 bg-sky-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out">
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