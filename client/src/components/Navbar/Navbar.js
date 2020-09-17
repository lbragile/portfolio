import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navbar-section">
      <a
        className="navbar-brand"
        href="https://github.com/lbragile/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
          <li className="nav-item active">
            <a className="nav-link" href="#about-section">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#project-section"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Projects
            </a>
            <div
              className="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#chessCAMO-project">
                chessCAMO
              </a>
              <a className="dropdown-item" href="#SimplifyCOVID-project">
                SimplifyCOVID
              </a>
              <a className="dropdown-item" href="#LoginPlay-project">
                LoginPlay
              </a>
              <a className="dropdown-item" href="#ChatIn-project">
                ChatIn
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#Portfolio-project">
                Portfolio
              </a>
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
