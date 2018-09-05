// Note : This Route is the main page and should display the "main view" -- search/input Component + collapsible columns for the sites? + toggles for showing/hiding sites

import React, { Component } from 'react';
import { connect } from 'react-redux'
import SiteColumnsContainer from '../containers/SiteColumnsContainer'
import TextInput from '../components/TextInput'

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            searchTerm: ''
        };
    }
    
    // Submit term for searching
    submitTerm(event) {
        event.preventDefault();
        console.log('search : ', this.state.term);
        const savedTerm = this.state.term;
        this.setState({
            term: '',
            searchTerm: savedTerm
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
            <form onSubmit={(event) => this.submitTerm(event)}>
                <TextInput name="search" value={this.state.term} onChange={(event) => this.handleSearchChange(event)}/>
                <button>Search</button>
            </form>
            
            <SiteColumnsContainer sites={this.props.sites} search={this.state.searchTerm} />
          </div>
        );
    }
}



const mapStateToProps = store => ({ sites: store.sites })

export default connect(mapStateToProps)(Main)
