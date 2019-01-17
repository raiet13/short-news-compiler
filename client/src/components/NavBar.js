import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {

  // <li><Link to="/showposts">ShowSitePosts</Link></li>
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/showsitessearch">ShowSitesSearch</Link></li>
                <li><Link to="/searchlist">SearchList</Link></li>
                <li><Link to="/credits">Credits</Link></li>
            </ul>
        </div>
    )
};

export default NavBar;
