import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Project.css";

export default function Project(props) {
  var max_desc_length = 450;

  const [seeMore, setSeeMore] = useState(false);

  function ButtonType() {
    if (!props.website && props.docs) {
      return (
        <>
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="mr-2">
              GitHub
            </Button>
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
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">GitHub</Button>
        </a>
      );
    } else {
      return (
        <a href={props.website} target="_blank" rel="noopener noreferrer">
          <Button variant="info">Visit Site</Button>
        </a>
      );
    }
  }

  return (
    <div className="container text-white anchor-top" id={props.name}>
      <h2 className="display-5 my-3 font-weight-bolder pt-3 text-center">{props.name}</h2>

      <hr></hr>

      <div className="row text-center align-items-center">
        <div className="col-lg">
          <img src={props.src} alt={props.alt} />
        </div>
        <div className="col-lg">
          <div className="desc pt-2 text-center">
            <h3>Description:</h3>
            {props.description > max_desc_length && !seeMore ? (
              <p className="text-justify">
                {props.description.textContent.substr(0, max_desc_length) + "... "}
                <span className="see-more-or-less" onClick={() => setSeeMore(!seeMore)}>
                  See More
                </span>
              </p>
            ) : (
              <p className="text-justify">
                {props.description}
                {seeMore ? (
                  <span className="see-more-or-less" onClick={() => setSeeMore(!seeMore)}>
                    See Less
                  </span>
                ) : (
                  ""
                )}
              </p>
            )}
          </div>
          <div className="impl text-center">
            <h3>Implementation Details:</h3>
            <div className="text-left">
              <ul>
                {props.implementation.map((item) => {
                  return <li key={Math.random()}>{item}</li>;
                })}
              </ul>
            </div>
          </div>

          <div className="link-buttons pb-3">{ButtonType()}</div>
        </div>
      </div>
    </div>
  );
}
