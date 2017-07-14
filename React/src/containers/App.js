import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';
import Header from '../components/Header/';
import Dashboard from '../views/Dashboard/'
import Users from '../views/Users/'
import Settings from '../views/Settings/'
import AboutMe from '../views/AboutMe/'


class App extends Component {
  render() {
    return (
      
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
            <Route path="/users" name="Users" component={Users}/>
            <Route path="/settings" name="Settings" component={Settings}/>
            <Route path="/aboutme" name="AboutMe" component={AboutMe}/>
            <Redirect from="/" to="/dashboard"/>
          </Switch>
        </div>

      </div>

    );
  }
}

export default App;
