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

  // Fetch Top Headlines from Washington Post
  componentDidMount() {
    console.log('ComponentDidMount App');
    // return fetch(`https://newsapi.org/v2/top-headlines?sources=the-washington-post`,{
    //     crossDomain:true,
    //     method: 'GET',
    //     headers: {'Authorization':'50561366f470423aa8a9936d62f781d5', 'Access-Control-Allow-Credentials':true}
    //     })
    // .then(
    //   console.log('fetched data'),
    //   response => response.json())
    // .then(posts => {
    //   console.log('fetch posts = ', posts)
    // });
    // fetchWashPostPosts();
  }
  
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
    sites: store.sites,
    posts: store.posts,
    searches: store.searches,
    siteSearches: store.siteSearches
  }
);
export default connect(mapStateToProps)(App);
