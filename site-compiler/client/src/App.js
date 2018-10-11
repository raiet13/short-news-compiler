// Note : This is the app route map that displays the app "layout" and is responsible for routing

import React, { Component } from 'react';
import './css/App.css';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './routes/LandingPage';
import ShowSitePosts from './routes/ShowSitePosts';
import SearchList from './routes/SearchList';
import Credits from './routes/Credits';
// import Main from './routes/Main';
// import SavedViews from './routes/SavedViews';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
            <React.Fragment>
            
              <header>
                <h1 className="App-title">(News) Site Compiler ver. 5</h1>
                <NavBar />
              </header>
              
              <div className="App-intro">

                { /* *** CURRENTLY IN PROGRESS *** */ }
                <Route exact path="/" render={() => <Landing />} />
                <Route exact path="/showposts" render={() => <ShowSitePosts />} />
                <Route exact path="/searchlist" render={() => <SearchList />} />
                <Route exact path="/credits" render={() => <Credits />} />
                
                
                { /* NOTE : This will need to be updated to be dynamic and removed from the navbar 

                <Route exact path="/main" render={() => <Main />} />
                <Route exact path="/savedviews" render={() => <SavedViews />} />
                */ }
              </div>
              
            </React.Fragment>
        </Router>
      </div>
    );
  }
}



// export default App;
// NOTE : Connected to store just for now to confirm seed data is in store properly

const mapStateToProps = store => (
  {
    sites: store.sites,
    posts: store.posts,
    searches: store.searches,
    siteSearches: store.siteSearches
  }
);
export default connect(mapStateToProps)(App);
