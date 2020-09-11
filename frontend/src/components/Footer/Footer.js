import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  function getYear() {
    var date = new Date();
    return date.getFullYear();
  }
  return (
    <>
      <section className="footer">
        <div className="container text-center">
          <div className="social-icons">
            <a href="https://github.com/lbragile/">
              <FontAwesomeIcon icon={faGithubSquare} size="3x" color="grey" />
            </a>
            <a
              href="https://www.linkedin.com/in/liorbragilevsky/"
              className="ml-1"
            >
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
          </div>
          <div className="mt-2">
            &copy; Lior Bragilevsky {getYear()}
            <div className="text-right mb-2">
              <a href="http://localhost:3000" className="no-uderline">
                TOP
                <span>
                  <FontAwesomeIcon icon={faArrowUp} className="up-arrow ml-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
