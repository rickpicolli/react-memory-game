import React from "react";
import "./Navbar.css";

export const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  	<div className="container-fluid">
  		<div className="navbar-header">
        <h2>Pokémon Game </h2>
  		</div>
      <ul className="navbar-nav navbar-right text-center">
        <li className="nav-item">
          <h3>Score: {props.score}</h3>
        </li>
        <li className="nav-item">
          <h3> Top Score: {props.highestScore}</h3>
        </li>
      </ul>
    </div>
  </nav>
);
