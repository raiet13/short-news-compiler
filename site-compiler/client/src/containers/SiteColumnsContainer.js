// Note : Container for the SiteColumns (just so frame is being tracked)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Posts from '../components/posts/Posts'

class SiteColumnsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sitePosts: {}
        };
    }

  // Function to map the posts to unique arrays based on site_id (to be fed into unique "Posts" components)
  mapPostsBySite = () => {
    console.log(this.props);
    let postSiteID = 0;
    let previousPostSiteID = 0;
    let newSitePosts = [];

    this.props.posts.map(post => {
      console.log(postSiteID, previousPostSiteID);
      postSiteID = post.site_id;
      if (postSiteID === previousPostSiteID) {
        newSitePosts << post;
      } else {
        // Add new site Posts
        // this.setState({
        //     sitePosts: { ...this.state.sitePosts, newSitePosts }
        // });
        newSitePosts = [];
      }
    })
  }

  render() {
    return (
      <div>
        {this.mapPostsBySite()}
        <Posts posts={this.props.posts}/>
      </div>
    )
  }
}

const mapStateToProps = store => ({ posts: store.posts })

export default connect(mapStateToProps)(SiteColumnsContainer);
