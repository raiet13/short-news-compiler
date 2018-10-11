// Note : Container for the SiteColumns (just so frame is being tracked)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Posts from '../components/posts/Posts'

class SiteColumnsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createdSiteIds: []
        };
    }

  // Function to map the posts to unique arrays based on site_id (to be fed into unique "Posts" components)
  mapPostsBySite = () => {
    console.log(this.props);
    const allPosts = this.props.posts;
    console.log(this.state);
    
    allPosts.forEach(post => {
      let currentState = this.state.createdSiteIds;
      console.log('current created site ids : ', currentState);
      if (currentState.includes(post.site_id) === false) {
        let currentSiteId = post.site_id;
        this.setState({
          createdSiteIds: { ...this.state.createdSiteIds, currentSiteId }
        });
      }
    });
    
    console.log(this.state);
  };


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
