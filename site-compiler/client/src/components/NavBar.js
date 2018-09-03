import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Main Page</Link> || 
            <Link to="/credits">Credits</Link> || 
            <Link to="/showposts">ShowSitePosts</Link> || 
            <Link to="/searchlist">SearchList</Link> || 
            <Link to="/savedviews">SavedViews</Link>
        </div>
    )
}

export default NavBar