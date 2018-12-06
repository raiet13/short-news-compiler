// Note : This Route should display expanded information on the site + expanded posts from the specified site + be able to be separately searchable/dynamic

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../components/searches/SearchInput';
import Posts from '../components/posts/Posts';
import '../css/ShowSitePosts.css';

class ShowSitesSearch extends Component {

  // Function to filter posts by site id
  filterPosts = (site_id) => {
    return (this.props.posts.filter(post => post.site_id === site_id));
  };
  
  render() {
    return (
      <div>
          <h3>ShowSitesSearch -- WIP</h3>
          <SearchInput />
          
          <div class="row">
            <div class="column">
              <h3>The Washington Post</h3>
              <Posts posts={this.filterPosts(1)}/>
            </div>
            
            <div class="column">
              <h3>Fox News</h3>
              <Posts posts={this.filterPosts(2)}/>
            </div>
            
          </div>
      </div>
    );
  }
}

// Get posts from store
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
 
export default connect(mapStateToProps)(ShowSitesSearch);
