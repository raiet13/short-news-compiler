import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
    return (
        <ul>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/credits">Credits</Link></li>
            <li><Link to="/showposts">ShowSitePosts</Link></li>
            <li><Link to="/searchlist">SearchList</Link></li>
            <li><Link to="/savedviews">SavedViews</Link></li>
        </ul>
    )
}

export default NavBar