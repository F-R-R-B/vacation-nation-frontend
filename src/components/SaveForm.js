import { Component } from "react";
import 'tw-elements';

class SaveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {disabled: false};
  }

  

  handleSubmit = (e) => {
    e.preventDefault();
    const nickname = e.target.nickname.value;
    const notes = e.target.notes.value;
    console.log('trying to submit', nickname, notes);
    this.props.handleSave(nickname, notes);
    this.setState({ disabled: true })
  }

  render () {
    return (
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id={`saveform-${this.props.idx}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered relative w-full pointer-events-none">
          <form
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            onSubmit={this.handleSubmit}>
            <div
              className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 className="text-xl leading-normal font-semibold text-slate-700" id="exampleModalLabel">
                Save This Trip
              </h5>
              <button type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body relative p-4">
              <div className="w-full flex flex-col px-6">
                <div className="mb-3 w-full flex flex-col">
                  <label htmlFor="nickname" className="form-label mr-auto self-start inline-block mb-2 text-gray-700">
                    Nickname
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="nickname"
                    name="nickname"
                    placeholder="Text..."
                  />
                </div>

                <div className="mb-3 w-full flex flex-col">
                  <label htmlFor="notes" className="form-label self-start inline-block mb-2 text-gray-700">
                    Notes
                  </label>
                  <textarea
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="notes"
                    name="notes"
                    rows="5"
                    placeholder="Enter any notes here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="submit" 
                className={`px-6 py-2.5 ${this.state.saved ? 'bg-gray-400' : 'bg-sky-700'} text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-sky-800 hover:shadow-lg focus:bg-sky-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-900 active:shadow-lg transition duration-150 ease-in-out ml-1`}
                disabled={this.state.disabled}
                data-bs-dismiss="modal">
                SAVE TRIP
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SaveForm;