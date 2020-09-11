import React from "react";
import { Button } from "react-bootstrap";

export default function Project(props) {
  function ButtonType() {
    if (!props.website && props.docs) {
      return (
        <>
          <a href={props.github}>
            <Button variant="primary">GitHub</Button>
          </a>
          <a href={props.docs}>
            <Button variant="outline-secondary">Documentation</Button>
          </a>
        </>
      );
    } else if (!props.website) {
      return (
        <>
          <a href={props.github}>
            <Button variant="primary">GitHub</Button>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a href={props.website}>
            <Button variant="outline-primary">Visit Site</Button>
          </a>
        </>
      );
    }
  }

  return (
    <>
      <h2 id={props.name + "-heading"}>{props.name}</h2>

      <div className="project-desc">
        <div className="project-image">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="project-details">
          <h3>Description:</h3>
          <p>{props.description}</p>
          <h3>Implementation Details:</h3>
          {props.implementation}

          <div className="link-buttons">{ButtonType()}</div>
        </div>
      </div>
    </>
  );
}
