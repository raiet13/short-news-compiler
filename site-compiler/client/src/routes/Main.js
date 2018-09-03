// Note : This Route is the main page and should display the "main view" -- search/input Component + collapsible columns for the sites? + toggles for showing/hiding sites

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a (News) Site Compiler</h1>
        </header>
        <p className="App-intro">
          Next Step : React/Redux Front End
        </p>
      </div>
    );
  }
}

export default Main;

      // <div>
      //   <header>
      //     <h1>Welcome to a (News) Site Compiler</h1>
      //   </header>
      //   <p>Next Step : React/Redux Front End</p>
      // </div>
