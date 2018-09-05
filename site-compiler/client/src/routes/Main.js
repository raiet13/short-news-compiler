// Note : This Route is the main page and should display the "main view" -- search/input Component + collapsible columns for the sites? + toggles for showing/hiding sites

import React, { Component } from 'react';
import SiteColumnsContainer from '../containers/SiteColumnsContainer'
import { connect } from 'react-redux'

class Main extends Component {

  render() {
    return (
      <div>
        <h3>Main View</h3>
        <SiteColumnsContainer posts={this.props.posts}/>
      </div>
    );
  }
}



const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(Main)
