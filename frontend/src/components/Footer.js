import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  function getYear() {
    var date = new Date();
    return date.getFullYear();
  }
  return (
    <>
      <div className="social-icons">
        <a href="https://github.com/lbragile/">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a href="https://www.linkedin.com/in/liorbragilevsky/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      &copy; Lior Bragilevsky {getYear()}
      <a id="up-arrow" href="http://localhost:3000">
        <FontAwesomeIcon icon={faArrowUp} />

        <p>TOP</p>
      </a>
    </>
  );
}
