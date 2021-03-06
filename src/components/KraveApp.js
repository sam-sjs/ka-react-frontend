import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'
import RestaurantSignUp from './RestaurantSignUp'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import SignUpForm from './SignUpForm'
import UserLogin from './UserLogin'
import RestaurantShow from './RestaurantShow'
import GoogleMaps from './GoogleMaps'
import NavBar from './NavBar';
import ControlPanel from './ControlPanel'

class KraveApp extends React.Component {

  state = {
    isLoggedIn: false
  }

  userStatus(answer){
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {

    return (
      <div>
        <NavBar />
        <Router>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results/:query" component={SearchResults} />
          <Route exact path="/restaurant/:id" component={RestaurantShow} />
          <Route exact path="/restaurants/signup" component={RestaurantSignUp} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/control" component={ControlPanel} />
        </Router>



        <div className="footer">
          <footer>
            &copy; Krave 2021 - All Right Reserved.
          </footer>
        </div>
      </div>
    );
  } // render()
} // class KraveApp

export default KraveApp
