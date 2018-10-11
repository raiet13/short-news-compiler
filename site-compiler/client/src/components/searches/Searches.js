// Note : Presentational Component for showing all Search Objects


// NOTE : Next step = transforming list into a table
/* 
    https://stackoverflow.com/questions/39462458/react-js-creating-simple-table
*/

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
