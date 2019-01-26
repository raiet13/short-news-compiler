// Note : Presentational Component for showing all Search Objects


import React, { Component } from 'react';
import Search from './Search';

class Searches extends Component {

  render() {
    const searchList = this.props.searches.searches.map(search => {
      return (
        <Search
            key={search.id}
            search={search}
        />
      )
    });

    return(
      <div>
        {searchList}
      </div>
    );
  }
};

export default Searches;
