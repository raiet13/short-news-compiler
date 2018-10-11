// Note : Presentational Component for showing all Site Objects (just so frame is being tracked)
import React, { Component } from 'react';

class Sites extends Component {

  render() {
    const { sites } = this.props;
    const siteList = sites.map(site => {
      return (
          <li key={site.id}><a href={site.url}>{site.name}</a></li>
      )
    });

    return(
      <ul>
        {siteList}
      </ul>
    );
  }
};

export default Sites;
