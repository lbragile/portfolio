import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import "./Project.css";

export default function Project(props) {
  const MAX_DESC_LENGTH = useRef(150);

  const [seeMore, setSeeMore] = useState(false);

  function ButtonType() {
    var urls = [], variant_type = [], btn_text = []; // prettier-ignore
    if (props.github) {
      urls.push(props.github);
      variant_type.push("primary");
      btn_text.push("GitHub");
    }
    if (props.docs) {
      urls.push(props.docs);
      variant_type.push("secondary");
      btn_text.push("Documentation");
    }
    if (props.website) {
      urls.push(props.website);
      variant_type.push("info");
      btn_text.push("Visit Site");
    }

    return variant_type.map((x, i) => {
      return (
        <a href={urls[i]} target="_blank" rel="noopener noreferrer" key={Math.random()}>
          <Button variant={x} className="mr-2">
            {btn_text[i]}
          </Button>
        </a>
      );
    });
  }

  return (
    <div className="container text-white anchor-top my-4" id={props.name}>
      <div className="card">
        <h2 className="card-header text-center">{props.name}</h2>
        <div className="card-body text-center row">
          {props.youtube ? (
            <iframe title="TabMerger v1.5.0 Sample Use Case" width="50%" src={props.youtube} />
          ) : (
            <img src={props.src} alt={props.alt} className="card-img-left rounded" />
          )}

          <div className="desc pt-2">
            <h4 className="card-title mt-3 mb-2">
              <b>Description</b>
            </h4>
            <div className="card-text text-justify px-3">
              {props.description.props.children.length > MAX_DESC_LENGTH.current && !seeMore
                ? props.description.props.children.substr(0, MAX_DESC_LENGTH.current) + "..."
                : props.description.props.children}
              <span className="see-more-or-less" onClick={() => setSeeMore(!seeMore)}>
                {seeMore ? " See Less" : " See More"}
              </span>
            </div>

            <h4 className="card-title mt-3 mb-2">
              <b>Implementation</b>
            </h4>
            <ul className="list-group list-group-flush text-left mb-2 px-3">
              {props.implementation.map((item) => {
                return (
                  <li className="list-group-item" key={Math.random()}>
                    {item}
                  </li>
                );
              })}
            </ul>

            <div className="link-buttons pt-4 text-center">{ButtonType()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
