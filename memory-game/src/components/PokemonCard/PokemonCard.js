import React from "react";
import "./PokemonCard.css";

export const PokemonCard = props => (
  <div className="card">
    <div className="img-container" data-id={props.id}>
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);