// Note : This Route should display expanded information on all of the searches requested
// Note : *** WIP -- CSS trouble and display information if no searches found yet

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Searches from '../components/searches/Searches';
import { fetchSearches, fetchSearchesNoDispatch } from '../actions/searches'
import TitleDescription from '../components/TitleDescription';

class SearchList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          searches: []
      };
  }

  componentDidMount() {
    console.log('Get Searches');
    this.props.fetchSearches();
    // fetchSearchesNoDispatch();
  };

  // <Searches searches={this.props.searches}/>
  render() {

    const searchListTitle = "All Completed Searches";
    const searchListDescription = `This page displays all "searches" conducted by using the "SearchPosts" page.`;

    return (
      <div>
        <TitleDescription title={searchListTitle} description={searchListDescription} />
        <Searches searches={this.state.searches}/>
      </div>
    );
  };
};

const mapStateToProps = store => ({ searches: store.searches })

const mapDispatchToProps = {
  fetchSearches
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);
