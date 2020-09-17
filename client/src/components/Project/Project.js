import React from "react";
import { Button } from "react-bootstrap";
import "./Project.css";

export default function Project(props) {
  function ButtonType() {
    if (!props.website && props.docs) {
      return (
        <>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">GitHub</Button>
          </a>
          <a href={props.docs} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="mx-1">
              Documentation
            </Button>
          </a>
        </>
      );
    } else if (!props.website) {
      return (
        <>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">GitHub</Button>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <Button variant="info">Visit Site</Button>
          </a>
        </>
      );
    }
  }

  return (
    <>
      <div className="container text-white" id={props.name + "-project"}>
        <h2 className="display-5 my-3 font-weight-bolder pt-3 text-center">
          {props.name}
        </h2>

        <hr></hr>

        <div className="row text-center align-items-center">
          <div className="col-lg">
            <img src={props.src} alt={props.alt} />
          </div>
          <div className="col-lg">
            <div className="desc pt-2 text-center">
              <h3>Description:</h3>
              <p className="text-justify">{props.description}</p>
            </div>
            <div className="impl text-center">
              <h3>Implementation Details:</h3>
              <div className="text-justify">{props.implementation}</div>
            </div>

            <div className="link-buttons pb-3">{ButtonType()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
