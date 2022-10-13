import { Component } from 'react';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Trips from './components/Trips';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

class App extends Component {

  render() {
    return (
      <div className='relative flex flex-col bg-gradient-to-b from-sky-50 via-cyan-100 to-sky-50' style={{'minHeight': '100vh'}}> 
            <Header />
            <div className='grow'>
              <Routes>

                <Route index element={ <Home /> }></Route>

                <Route
                  exact path="/search" 
                  element={<Search />}>
                </Route>

                <Route
                  exact path="/trips" 
                  element={<Trips />}>
                </Route>

                <Route
                  exact path="/about" 
                  element={<About />}>
                </Route>
                
                <Route // protected
                  exact path="/profile" 
                  element={<Profile />}>
                </Route>

              </Routes>
            </div>
            <Footer />
      </div>
    );
  }
}

export default withAuth0(App);
