import { Component } from "react";

class Footer extends Component {
  render () {
    return (
      <div >
        <div className="w-screen bg-cyan-800 flex flex-col items-center justify-center">
          <div className="text-2xl text-cyan-100"> &copy;F.R.R.B </div>
        </div>
      </div>
    );
  }
}

export default Footer;