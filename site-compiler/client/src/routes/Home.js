// Note : This Route is Landing Page welcoming users to the app

import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a (News) Site Compiler</h1>
        </header>
        <h4>(News) Site Compiler ver. 6</h4>
        <p className="App-intro">
          Description : XXXXXXX
        </p>
        <p>
          Getting Started / How to Use : XXXXXXX
        </p>
      </div>
    );
  }
}

export default Home;