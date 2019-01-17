// Note : This Route should display expanded information on the site + expanded posts from the specified site + be able to be separately searchable/dynamic
// *** WIP -- need to use the searchInput properly (has own issues) + display updating + columns need responsiveness fix (stack when window shrunk)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/searches/SearchInput';
import Posts from '../components/posts/Posts';
import '../css/ShowSitePosts.css';
import { fetchPosts, removePosts, fetchPostsNoDispatch } from '../actions/posts'

class ShowSitesSearch extends Component {

  // Generate initial few posts for display? *** OR only filterposts if they exist
  componentDidMount() {
    console.log('Need to update input vs display');
    fetchPostsNoDispatch('the-washington-post', 'trump');
  };

  // Function to check for posts to search
  checkPosts = (site_id) => {
    console.log(`Num posts : ${this.props.posts.length}`);
    if (this.props.posts.length != undefined && this.props.posts.length > 0) {
      return (<Posts posts={this.filterPosts(site_id)}/>)
    } else {
      return ('Search keyword to display posts');
    };
  };

  // Function to filter posts by site id
  filterPosts = (site_id) => {
    return (this.props.posts.filter(post => post.site_id === site_id));
  };

  render() {
    return (
      <div>
          <h3>ShowSitesSearch -- WIP</h3>
          <SearchInput fetchPosts={this.fetchPosts}/>

          <div className="row">
            <div className="column">
              <h3>The Washington Post</h3>
              {this.checkPosts(1)}
            </div>

            <div className="column">
              <h3>Fox News</h3>
              {this.checkPosts(2)}
            </div>

          </div>
      </div>
    );
  };
};

// Get posts from store
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(ShowSitesSearch);
