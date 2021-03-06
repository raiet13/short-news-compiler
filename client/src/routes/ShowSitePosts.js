// Note : This Route should display expanded information on the site + expanded posts from the specified site + be able to be separately searchable/dynamic

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import ExpandedPost from '../components/posts/ExpandedPost';
import '../css/ShowSitePosts.css';
import TitleDescription from '../components/TitleDescription';

class ShowSitePosts extends Component {

    // Set up component's local state and functions
    constructor(props) {
        super(props);
        this.state = {selectedPostId: 0};
    }

  // Function to filter posts by site id
  filterPosts = (site_id) => {
    return (this.props.posts.filter(post => post.site_id === site_id));
  };

  // Function to display selected post -- ***WIP***
  selectPost = () => {
    // Get selected post on mouse click
    // Update local state "selectedPostId" with selected post id
    // Call "showExpandedPost" function
  };

  // Function to display Expanded Post in section (if applicable)
  showExpandedPost = (post_id) => {
    // If post_id then show expanded post
    if (post_id > 0) {
      const selectedPost = this.props.posts.filter(post => post.id === post_id);
      return (<ExpandedPost post={selectedPost}/>);
    } else {
      // Else, no post_id (initial load) show text
      return (<p>No Post Selected</p>);
    }
  }

  render() {

    const showSitePostsTitle = "ShowSitePosts -- WIP";
    const showSitePostsDescription = "WIP";

    return (
      <div>
          <TitleDescription title={showSitePostsTitle} description={showSitePostsDescription} />

          <div class="row">
            <div class="column">
              <h3>The Washington Post</h3>
              <Posts posts={this.filterPosts(1)}/>
            </div>

            <div class="column">
              <h3>Show Expanded Post</h3>
              <div>{this.showExpandedPost(this.state.selectedPostId)}</div>
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

export default connect(mapStateToProps)(ShowSitePosts);
