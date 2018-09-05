// Note : This Route is the main page and should display the "main view" -- search/input Component + collapsible columns for the sites? + toggles for showing/hiding sites

import React, { Component } from 'react';
// import RestaurantInput from '../components/restaurants/RestaurantInput'
import Posts from '../components/posts/Posts'
import { connect } from 'react-redux'

class Main extends Component {

        // <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        // <Restaurants
        //   restaurants={this.props.restaurants}
        //   deleteRestaurant={this.props.deleteRestaurant}
        // />

  render() {
    return (
      <div>
        <h3>Main View</h3>
        <Posts posts={this.props.posts}/>
      </div>
    );
  }
}



const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(Main)

// const mapDispatchToProps = dispatch => ({
//   addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
//   deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Main)
