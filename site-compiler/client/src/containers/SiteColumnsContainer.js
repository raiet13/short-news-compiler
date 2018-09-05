// Note : Container for the SiteColumns (just so frame is being tracked)

import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = store => ({ posts: store.posts })

export default connect(mapStateToProps)(SiteColumnsContainer);
