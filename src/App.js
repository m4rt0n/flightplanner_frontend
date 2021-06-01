import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Companies from './Companies';
import Flights from './Flights';
import CustomFlights from './CustomFlights';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h2>Flight Planner</h2>
          <ul>
            <li><Link to={'/'}>Companies</Link></li>
            <li><Link to={'/flights'}>Flights</Link></li>
            <li><Link to={'/customflights'}>CustomFlights</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={Companies} />
            <Route path='/flights' component={Flights} />
            <Route path='/customflights' component={CustomFlights} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;