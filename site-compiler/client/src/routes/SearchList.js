// Note : This Route should display expanded information on all of the searches requested

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Searches from '../components/searches/Searches';

class SearchList extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            searches: []
        };
    }

  render() {
    return (
      <div>
        <h3>All Completed Searches</h3>
        <Searches searches={this.props.searches}/>
      </div>
    );
  }
}

const mapStateToProps = store => ({ searches: store.searches })

// export default SearchList;
export default connect(mapStateToProps)(SearchList);
