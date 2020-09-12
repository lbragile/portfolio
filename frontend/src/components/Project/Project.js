import React from "react";
import { Button } from "react-bootstrap";
import "./Project.css";

export default function Project(props) {
  function ButtonType() {
    if (!props.website && props.docs) {
      return (
        <>
          <a href={props.github}>
            <Button variant="primary">GitHub</Button>
          </a>
          <a href={props.docs}>
            <Button variant="secondary" className="mx-1">
              Documentation
            </Button>
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
            <Button variant="info">Visit Site</Button>
          </a>
        </>
      );
    }
  }

  return (
    <>
      <div className="container text-white">
        <h2
          className="display-5 my-3 font-weight-bolder pt-3 text-center"
          id={props.name + "-heading"}
        >
          {props.name}
        </h2>

        <hr></hr>

        <div className="row text-center align-items-center">
          <div className="col-sm">
            <img className="mr-4" src={props.src} alt={props.alt} />
          </div>
          <div className="col-sm">
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
