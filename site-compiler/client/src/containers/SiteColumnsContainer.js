// Note : Container for the SiteColumns (just so frame is being tracked)

import React, { Component } from 'react'
import Posts from '../components/posts/Posts'

class SiteColumnsContainer extends Component {

  render() {
    return (
      <div>
        <Posts posts={this.props.posts}/>
      </div>
    )
  }
}


export default SiteColumnsContainer;