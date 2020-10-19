import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-bar" id="navbar">
      <div className="top-bar-left">
        <ul className="menu" id="menu">
          <li><Link to="/words"><strong>Word Up</strong></Link></li>
          <li><Link to="/languages">View All Languages</Link></li>
          <li><Link to="/words/new">Submit a New Word</Link></li>
          <li><Link to="/users">Make a User Profile</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><input type="search" placeholder="Search" /></li>
          <li><button type="button" className="button">Search</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;