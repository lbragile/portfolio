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
      <section className="projects">
        <div className="container">
          <h2
            className="display-4 font-weight-bolder pt-3 text-center"
            id={props.name + "-heading"}
          >
            {props.name}
          </h2>
          <table className="about-container table table-borderless table-responsive">
            <tbody>
              <tr>
                <td className="align-middle">
                  <img className="mr-4" src={props.src} alt={props.alt} />
                </td>
                <td className="align-middle text-justify">
                  <div className="desc">
                    <h3>Description:</h3>
                    <p>{props.description}</p>
                  </div>
                  <div className="impl">
                    <h3>Implementation Details:</h3>
                    {props.implementation}
                  </div>

                  <div className="link-buttons">{ButtonType()}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
