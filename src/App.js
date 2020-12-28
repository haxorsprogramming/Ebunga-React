import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import home from './page/home';
import login from './page/login';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/login" component={login}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;