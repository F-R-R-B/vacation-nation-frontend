import { Component } from "react";
import { Link } from "react-router-dom";
import UserMenu from './UserMenu';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   const { user, isAuthenticated } = this.props.auth0;
  //   this.state = {isAuth: isAuthenticated}
  // }

  render () {
    
    return (
      <div className="w-screen h-28 md:h-16">
        <nav className="fixed top-0 z-10 h-28 w-screen bg-sky-50 text-orange-500 flex flex-col md:h-16 md:grid grid-cols-2 items-center">
          <div className="mb-4 md:my-0 font-bold text-xl">
            <img src='/vacation-nation-1.jpg' alt='company logo' height='150px' className='h-16'/>
          </div>
          <div className="w-full flex justify-evenly items-center font-semibold text-xl">
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
            <UserMenu />
          </div>

        </nav>
      </div>
    );
  }
}

export default Header;