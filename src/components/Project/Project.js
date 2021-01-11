import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import "./Project.css";

export default function Project(props) {
  const MAX_DESC_LENGTH = useRef(400);

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
    <div className="container text-white anchor-top my-2" id={props.name}>
      <div className="card">
        <h2 className="card-header text-center">{props.name}</h2>
        <div className="card-body">
          <img src={props.src} alt={props.alt} className="card-img-left rounded" />

          <div className="desc pt-2 text-center">
            <div className="card-text text-justify">
              {props.description.props.children.length > MAX_DESC_LENGTH.current && !seeMore
                ? props.description.props.children.substr(0, MAX_DESC_LENGTH.current) + "..."
                : props.description.props.children}
              <span className="see-more-or-less" onClick={() => setSeeMore(!seeMore)}>
                {seeMore ? " See Less" : " See More"}
              </span>
            </div>
          </div>
        </div>
        <h3 className="card-title text-center">Implementation Details</h3>
        <ul className="list-group list-group-flush text-left">
          {props.implementation.map((item) => {
            return (
              <li className="list-group-item" key={Math.random()}>
                {item}
              </li>
            );
          })}
        </ul>

        <div className="card-body link-buttons pt-4 text-center">{ButtonType()}</div>
      </div>
    </div>
  );
}
