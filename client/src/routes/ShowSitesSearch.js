// Note : This Route should display expanded information on the site + expanded posts from the specified site + be able to be separately searchable/dynamic
// *** WIP -- need to use the searchInput properly (has own issues) + display updating + columns need responsiveness fix (stack when window shrunk)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/searches/SearchInput';
import Posts from '../components/posts/Posts';
import '../css/ShowSitePosts.css';
import { fetchPosts, removePosts } from '../actions/posts'

import TitleDescription from '../components/TitleDescription';

class ShowSitesSearch extends Component {

  // Function to check for posts to search
  checkPosts = (site_id) => {
    console.log(`Num posts : ${this.props.posts.articles.length}`);
    if (this.props.posts.articles.length !== undefined && this.props.posts.articles.length > 0) {
      console.log('show posts');
      return (<Posts posts={this.filterPosts(site_id)}/>)
    } else {
      return ('Search keyword to display posts');
    };
  };

  // Function to filter posts by site id
  filterPosts = (site_id) => {
    return (this.props.posts.articles.filter(post => post.site_id === site_id));
  };

  render() {

    const showSitesSearchTitle = "ShowSitesSearch -- WIP";
    const showSitesSearchDescription = "Search specified sites at the same time.";

    return (
      <div>
          <TitleDescription title={showSitesSearchTitle} description={showSitesSearchDescription} />

          <SearchInput fetchPosts={this.props.fetchPosts}/>

          <div className="row">

            <div className="column">
              <h3>All Posts</h3>
              <Posts posts={this.props.posts.articles}/>
            </div>

            <div className="column">
              <h3>The Washington Post</h3>
              {this.checkPosts(1)}
            </div>

          </div>
      </div>
    );
  };
};

//
// <div className="column">
//   <h3>Fox News</h3>
//   {this.checkPosts(2)}
// </div>

// Get posts from store
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowSitesSearch);
