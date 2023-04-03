import React from "react";
import "./Card.css";

const Card = ({ mod, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <h2>{mod.name}</h2>
        </div>
        <div className="card-back">
          <p>More information about {mod.name}...</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
