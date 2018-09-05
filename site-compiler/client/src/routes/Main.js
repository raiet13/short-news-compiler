// Note : This Route is the main page and should display the "main view" -- search/input Component + collapsible columns for the sites? + toggles for showing/hiding sites

import React, { Component } from 'react';
import { connect } from 'react-redux'
import SiteColumnsContainer from '../containers/SiteColumnsContainer'
import TextInput from '../components/TextInput'

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
    }
    
    
    // Submit term for searching
    submitTerm(event) {
      console.log('search : ', this.state.term);
        this.setState({
            term: ''
        });
    }
    
    // Handle onChange
    handleSearchChange(event) {
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        });
    }
    
    render() {
        return (
          <div>
            <h3>Main View</h3>
            <form onSubmit={(event) => this.searchTerm(event)}>
                <TextInput name="search" value={this.state.term} onChange={(event) => this.handleSearchChange(event)}/>
                <button>Search</button>
            </form>
            <SiteColumnsContainer posts={this.props.posts}/>
          </div>
        );
    }
}



const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(Main)
