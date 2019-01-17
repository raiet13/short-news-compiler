// Note : Presentational Component for showing all Site Objects

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
      <div>
        <ul>
          {siteList}
        </ul>
        <div>
          <p>Show Expanded Site Info Here(?) if Clicked On (change from url href to ~buttons)</p>
        </div>
      </div>
    );
  }
};

export default Sites;
