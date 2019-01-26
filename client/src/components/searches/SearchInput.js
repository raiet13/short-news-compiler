// Note : Component for creating new Searches -- ***WIP fetchPosts prop function
import React from 'react';
import { connect } from 'react-redux'
import { addSearch } from '../../actions/searches'

class SearchInput extends React.Component {

    // Set up component's local state and functions
    constructor(props) {
        super(props);
        this.state = {keyword: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // Track the search param
    handleChange(event) {
        this.setState({
            keyword: event.target.value
        });
    };

    // Submit the search and call the fetch requests
    handleSubmit(event) {
        // alert('Search for: ' + this.state.keyword);
        event.preventDefault();

        this.props.addSearch(this.state.keyword);
        this.props.fetchPosts('the-washington-post', this.state.keyword);
        // console.log(`Search query : ${this.state.keyword}`);
    };

    // Display Input/Form
    render() {
        return (
          <div className="searchInput">
            <form onSubmit={this.handleSubmit}>
              <label> Search for:
                  <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Search" />
            </form>
          </div>
        );
    };
};

const mapDispatchToProps = {
  addSearch
}

export default connect(null, mapDispatchToProps)(SearchInput);
