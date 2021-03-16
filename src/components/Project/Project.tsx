import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import { IProject } from "../misc/ProjectText";
import "./Project.css";

export default function Project(props: IProject): JSX.Element {
  const MAX_DESC_LENGTH = useRef(400);

  const [seeMore, setSeeMore] = useState(false);

  function ButtonType(): JSX.Element[] {
    var urls: string[] = [], variant_type: string[] = [], btn_text: string[] = []; // prettier-ignore
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

    return variant_type.map(
      (x: string, i): JSX.Element => {
        return (
          <a href={urls[i]} target="_blank" rel="noopener noreferrer" key={Math.random()}>
            <Button variant={x} className="mr-2">
              {btn_text[i]}
            </Button>
          </a>
        );
      }
    );
  }

  return (
    <div className="container text-white anchor-top my-4" id={props.name}>
      <div className="card">
        <h3 className="card-header text-center">{props.name}</h3>
        <div className="card-body text-center row">
          <div className="container-img my-auto">
            <img src={props.src} alt={props.alt} className="card-img-left rounded" />
          </div>

          <div className="desc my-auto">
            <h4 className="card-title mb-2">
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
              {props.implementation.map((item: string) => {
                return (
                  <li className="list-group-item" key={Math.random()}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="card-footer text-center link-buttons">{ButtonType()}</div>
      </div>
    </div>
  );
}
