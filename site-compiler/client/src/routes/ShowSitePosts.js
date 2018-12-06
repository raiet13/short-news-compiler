// Note : This Route should display expanded information on the site + expanded posts from the specified site + be able to be separately searchable/dynamic

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import ExpandedPost from '../components/posts/ExpandedPost';

class ShowSitePosts extends Component {
  // Display Dropdown with site names
  // Select specific site then shows...
    // Site Name + URL
    // Site Post Container of the "three expanded posts" (three column structure with scrolling) 
  
  
  // Function to filter posts by site id
  filterPosts = (site_id) => {
    // const posts = this.props.posts;
    // console.log('site id : ', site_id)
    // console.log('props.post : ', this.props.posts)
    // console.log('posts :', posts)
    // console.log(posts.filter(post => post.site_id === site_id))
    return (this.props.posts.filter(post => post.site_id === site_id));
  };

  render() {
    return (
      <div>
          <h3>ShowSitePosts -- WIP</h3>
          
          <div class="row">
            <div class="column">
              <p>The Washington Post</p>
              <Posts posts={this.filterPosts(1)}/>
            </div>
            
            <div class="column">
              <p>Fox News</p>
              <Posts posts={this.filterPosts(2)}/>
            </div>
            
          </div>
      </div>
    );
  }
}

// export default ShowSitePosts;

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
 
export default connect(mapStateToProps)(ShowSitePosts);
