import React from "react";

function Navbar() {
  return (
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Word Up</li>
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
        </ul>
      </div>
      <div class="top-bar-right">
        <ul class="menu">
          <li><input type="search" placeholder="Search" /></li>
          <li><button type="button" class="button">Search</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
