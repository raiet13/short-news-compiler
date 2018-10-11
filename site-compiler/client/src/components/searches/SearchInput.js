// Note : Component for creating new Searches (just so frame is being tracked)
import React from 'react';

class SearchInput extends React.Component {
    
    // Set up component's local state and functions
    constructor(props) {
        super(props);
        this.state = {keyword: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // Track the search param
    handleChange(event) {
        this.setState({
            keyword: event.target.value
        });
    }
    
    // Submit the search and call the fetch requests
    handleSubmit(event) {
        alert('Search for: ' + this.state.keyword);
        event.preventDefault();
        // Get fetch requests
    }
    
    // Display Input/Form
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label> Search for:
                <input type="text" name="keyword" value={this.state.keyword} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Search" />
          </form>
        );
    }
}

export default SearchInput;