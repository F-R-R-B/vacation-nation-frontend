import { Component } from "react";
import Profile from "./Profile";

class About extends Component {
  render () {
    return (
      <div className="my-3 flex flex-col items-center">
        <h1 className="my-3 font-extrabold text-5xl text-gray-700 drop-shadow-2xl">About</h1>
        <div>
          <h2 className="mb-6 font-bold text-3xl text-slate-800 drop-shadow-lg">
            <span className="text-orange-500">Who</span> we Are<span className="text-orange-500">.</span>
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-6 font-bold text-3xl text-slate-800 drop-shadow-lg">
            <span className="text-orange-500">About</span> our Team<span className="text-orange-500">.</span>
          </h2>
          <Profile name='Joe' />
          <Profile name='Julian' />
          <Profile name='Ian' />
          <Profile name='Mathieu' />
        </div>

      </div>
    );
  }
}

export default About;