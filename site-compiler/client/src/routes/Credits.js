// Note : This route should show list all sites used and give credits

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sites from '../components/sites/Sites';

class Credits extends Component {
  
  render() {
    return(
      <div>
          <h3>Credits!</h3>
          <p>Sites Used</p>
          <Sites sites={this.props.sites}/>
          <p><a href="https://newsapi.org/">Site information powered by News API</a></p>
      </div>
    );
  }
};

// export default Credits;

const mapStateToProps = (state) => {
  return { sites: state.sites };
};
 
export default connect(mapStateToProps)(Credits);
