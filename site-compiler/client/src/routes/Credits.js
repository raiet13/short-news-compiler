// Note : This route should show list all credits and include the license and stuff?

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Sites from '../components/sites/Sites';

class Credits extends Component {
  
  render() {
    return(
      <div>
          <h3>Credits!</h3>
          <p>Sites Used -- replace below with Sites component</p>
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