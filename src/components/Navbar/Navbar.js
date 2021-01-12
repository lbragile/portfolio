import React, { useRef, useEffect } from "react";
import "./Navbar.css";

import ProjectText from "../misc/ProjectText";
export default function Navbar() {
  var navRef = useRef();
  var prevY = useRef(window.scrollY);

  useEffect(() => {
    function hideOrShowNav(e) {
      const offset = e.currentTarget.scrollY;
      navRef.current.style.transition = "all 1s";
      navRef.current.style.opacity = +(prevY.current > offset);
      prevY.current = offset;
    }

    window.addEventListener("scroll", (e) => hideOrShowNav(e));
    return () => {
      window.removeEventListener("scroll", (e) => hideOrShowNav(e));
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top mb-3" id="navbar-section" ref={navRef}>
      <a className="navbar-brand" href="https://github.com/lbragile/" target="_blank" rel="noopener noreferrer">
        lbragile
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto text-right">
          <li className="nav-item">
            <a className="nav-link" href="#about-section">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown">
              Projects
            </a>
            <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              {ProjectText.map((x, i) => {
                return (
                  <span key={Math.random()}>
                    {i === ProjectText.length - 1 ? <div className="dropdown-divider"></div> : null}
                    <a className="dropdown-item" href={"#" + x.name}>
                      {x.name}
                    </a>
                  </span>
                );
              })}
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-section">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
