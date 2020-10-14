import React from "react";

function Navbar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Word Up</li>
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
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
