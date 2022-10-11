import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render () {
    return (
      <div className="w-screen h-16">
        <nav className="fixed top-0 z-10 h-16 w-screen bg-orange-500 grid grid-cols-2 items-center">
          <div className="font-bold text-2xl">LOGO</div>
          <div className="flex justify-evenly items-center font-semibold text-xl">
            <Link to='/' > 
              Home 
            </Link>
            <Link to='search' > 
              Search 
            </Link>
            <Link to='trips' > 
              Trips 
            </Link>
            <Link to='about' > 
              About 
            </Link>
          </div>

        </nav>
      </div>
    );
  }
}

export default Header;