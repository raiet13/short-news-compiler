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
          <h1 className="App-title">(News) Site Compiler</h1>
        </header>
        <h4>Welcome to a (News) Site Compiler by Raiet Intraub</h4>
        <p className="App-intro">
          <strong>Description :</strong> A one-stop-show compiler app that brings together several news sources using their APIs.
        </p>
        <p><strong>Getting Started / How to Use :</strong> Click on any of the tabs in the navbar to get started. Each page will include a description and instructions.</p>
      </div>
    );
  };
};

export default Home;
