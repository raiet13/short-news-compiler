// Note : This route should show list all credits and include the license and stuff?

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Credits extends Component {

  // Get list of sites used -- map to list items --> see below for frame
  
  
  render() {
    return(
      <div>
          <h3>Credits!</h3>
          <p>Credit to NewsAPI</p>
          <p>Sites Used</p>
          <ul>
            <li><a href="https://www.washingtonpost.com/">The Washington Post</a></li>
            <li><a href="http://www.foxnews.com/">Fox News</a></li>
            <li><a href="https://www.politico.com/">Politico</a></li>
          </ul>
      </div>
    );
  }
};

export default Credits;