// Note : This Route is Landing Page welcoming users to the app

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a (News) Site Compiler</h1>
        </header>
        <p>
          Description : XXXXXXX
        </p>
        <p>
          Getting Started / How to Use : XXXXXXX
        </p>
        <p className="App-intro">
          Next Step : React/Redux Front End
        </p>
      </div>
    );
  }
}

export default Main;