// Note : This route should show list all sites used and give credits
// Note : Updated to be hard coded and not use the Site information because unnecessarily level of complexity at the moment

import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Sites from '../components/sites/Sites';

import TitleDescription from '../components/TitleDescription';

class Credits extends Component {

  // Note : Replaces the hard-coded list of sites
  // <Sites sites={this.props.sites}/>

  render() {

    const creditTitle = "Credits!";
    const creditDescription = "List of all news source sites that can be searched for articles. Click on a site name to be brought to the site home page.";

    // <li><a href="https://www.politico.com/" target="_blank">Politico</a></li>
    return(
      <div>
          <TitleDescription title={creditTitle} description={creditDescription} />
          <ul>
            <li><a href="https://www.washingtonpost.com/" rel="noopener">The Washington Post</a></li>
            <li><a href="http://www.foxnews.com/" rel="noopener">Fox News</a></li>
          </ul>
          <p><a href="https://newsapi.org/" rel="noopener">Site information powered by News API</a></p>
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
