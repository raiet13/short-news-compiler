// Note : This is the app route map that displays the app "layout" and is responsible for routing

import React, { Component } from 'react';
import './css/App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './routes/Home';
import ShowSitePosts from './routes/ShowSitePosts';
import ShowSitesSearch from './routes/ShowSitesSearch';
import SearchList from './routes/SearchList';
import Credits from './routes/Credits';
// import { fetchWashPostPosts } from './actions/posts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
            <React.Fragment>

              <header>
                <NavBar />
              </header>

              <div className="App-intro">
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/showsitessearch" render={() => <ShowSitesSearch />} />
                <Route exact path="/showposts" render={() => <ShowSitePosts />} />
                <Route exact path="/searchlist" render={() => <SearchList />} />
                <Route exact path="/credits" render={() => <Credits />} />
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
    posts: store.posts,
    searches: store.searches,
  }
);
export default connect(mapStateToProps)(App);
