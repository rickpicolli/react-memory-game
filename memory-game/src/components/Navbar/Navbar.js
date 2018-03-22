import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Pokémon Game </a>
      </li>
      <li className="nav-item">
        <h3>Score: {}</h3>
      </li>
      <li className="nav-item">
        <h3>Top Score: {}</h3>
      </li>
    </ul>
  </div>

    </nav>
);