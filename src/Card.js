import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="Card">
      <h4 className="Card-title">{props.title}</h4>
      <p className="Card-description">{props.description}</p>
      <a href={props.url} target="_blank"><img className="Card-image" src={props.src} alt={props.title} /></a>
      <small className="Card-small">
        Project {props.currNum} of {props.totalNum}.
        <br></br>
        Click on image to go to project's site.
      </small>
    </div>
  );
}

export default Card;
