import { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import { AuthButton } from "./AuthButtons";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   const { user, isAuthenticated } = this.props.auth0;
  //   this.state = {isAuth: isAuthenticated}
  // }

  render () {
    const { user, isLoading } = this.props.auth0;
    console.log("🚀 ~ file: Header.js ~ line 16 ~ Header ~ render ~ user", user);
    
    return (
      <div className="w-screen h-16">
        <nav className="fixed top-0 z-10 h-16 w-screen bg-orange-500 text-gray-100 grid grid-cols-2 items-center">
          <div className="ml-6 font-bold text-xl">
            {isLoading ? 'Loading...' : <AuthButton />}
          </div>
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
            <Link to='profile' > 
              My Profile 
            </Link>
          </div>

        </nav>
      </div>
    );
  }
}

export default withAuth0(Header);