import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">News Site Compiler</h1>
        </header>
        <p className="App-intro">
          Display Search Bar Component (stateless)<br/>
          Display Buttons to display various site Components (stateless buttons + routes/containers for each site)<br/>
          Display Site Containers (container) + Post Cards (stateless)<br/>
        </p>
      </div>
    );
  }
}

export default App;
