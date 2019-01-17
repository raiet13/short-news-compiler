// Note : This route should show list all sites used and give credits
// Note : Updated to be hard coded and not use the Site information because unnecessarily level of complexity at the moment

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Sites from '../components/sites/Sites';

class Credits extends Component {

  // Note : Replaces the hard-coded list of sites
  // <Sites sites={this.props.sites}/>

  render() {
    return(
      <div>
          <h3>Credits!</h3>
          <p>Sites Used</p>
          <ul>
            <li><a href="https://www.washingtonpost.com/">The Washington Post</a></li>
            <li><a href="http://www.foxnews.com/">Fox News</a></li>
            <li><a href="https://www.politico.com/">Politico</a></li>
          </ul>
          <p><a href="https://newsapi.org/">Site information powered by News API</a></p>
      </div>
    );
  }
};

export default Credits;

// const mapStateToProps = (state) => {
//   return { sites: state.sites };
// };
//
// export default connect(mapStateToProps)(Credits);
