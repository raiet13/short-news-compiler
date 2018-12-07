// Note : Presentational Component for showing all Search Objects


import React, { Component } from 'react';
import Search from './Search';

class Searches extends Component {

  render() {
    const { searches } = this.props;
    const searchList = searches.map(search => {
      return (
        <Search
            key={search.id}
            search={search}
        />
      )
    });

    return(
      <ul>
        {searchList}
      </ul>
    );
  }
};

export default Searches;
