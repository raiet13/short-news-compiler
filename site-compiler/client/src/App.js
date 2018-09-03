// Note : This is the app route map that displays the app "layout" and is responsible for routing

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './routes/Main';
import Credits from './routes/Credits';
import ShowSitePosts from './routes/ShowSitePosts';
import SearchList from './routes/SearchList';
import SavedViews from './routes/SavedViews';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <Router>
            <React.Fragment>
            
              <header>
                <h1 className="App-title">(News) Site Compiler</h1>
                <NavBar />
              </header>
              
              <div className="App-intro">
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/credits" render={() => <Credits />} />
                <Route exact path="/showposts" render={() => <ShowSitePosts />} />
                <Route exact path="/searchlist" render={() => <SearchList />} />
                <Route exact path="/savedviews" render={() => <SavedViews />} />
              </div>
              
            </React.Fragment>
        </Router>
      </div>
    );
  }
}


export default App;
