import React from "react";
import { FaArrowUp, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  function getYear() {
    var date = new Date();
    return date.getFullYear();
  }
  return (
    <>
      <section className="footer">
        <div className="container text-center py-2">
          <div>
            <a href="https://github.com/lbragile/">
              <FaGithubSquare size="3rem" color="rgb(209, 209, 209)" />
            </a>
            <a
              href="https://www.linkedin.com/in/liorbragilevsky/"
              className="ml-1"
            >
              <FaLinkedin size="3rem" color="rgb(125, 170, 255)" />
            </a>
          </div>
          <div className="text-white row">
            <div className="text-left col-9">
              &copy; Lior Bragilevsky {getYear()}
            </div>
            <div className="text-right col-3">
              <a
                href="http://localhost:3000"
                className="no-uderline text-white"
              >
                TOP
                <FaArrowUp className="up-arrow ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
