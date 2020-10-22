import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-bar" id="navbar">
      <ul className="menu" id="menu">
        <li><Link to="/words"><strong>Word Upp</strong></Link></li>
        <li><Link to="/words/new">Submit a New Word</Link></li>
        <li><Link to="/users/new">Make a User Profile</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
