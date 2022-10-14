import { Component } from "react";
import AboutMe from "./AboutMe";

class About extends Component {
  render () {
    return (
      <div className="my-3 flex flex-col items-center">
        <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
          <h1 className="mt-8 mb-12 font-extrabold text-5xl text-gray-700 drop-shadow-2xl">About</h1>
          <div className="text-center">
          <h2 className="mb-6 font-bold text-3xl text-slate-800 drop-shadow-lg">
              <span className="text-orange-500">Mission</span> statement<span className="text-orange-500">.</span>
          </h2>
          <p class="font-semibold text-xl text-gray-700 mb-10 drop-shadow-lg">Here at <span className="text-orange-500">VacaNation</span>, we believe that fulfilling travel experiences begin not only with choosing the right destination, but having the right state of mind.</p>
          <h2 className="mb-6 font-bold text-3xl text-slate-800 drop-shadow-lg">
            <span className="text-orange-500">Who</span> we Are<span className="text-orange-500">.</span>
          </h2>
            
          <p class="font-semibold text-xl text-gray-700 mb-10 drop-shadow-lg">America's oldest travel agency predating even The Mayflower. Year after year we have dominated the relaxation market. Bringing in <span className="text-orange-500">billions</span> to our investors, and members. That's right! We give each new member <span className="text-orange-500">$10,000</span> dollars for just signing up! So join us to be considered a cool kid! </p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="mb-6 mt-16 font-bold text-3xl text-slate-800 drop-shadow-lg">
            <span className="text-orange-500">About</span> our Team<span className="text-orange-500">.</span>
          </h2>
          <AboutMe />
        </div>
        </div>

      </div>
    );
  }
}

export default About;