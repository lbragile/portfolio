import React from "react";
import "./LandingPage.css";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function LandingPage(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.src})` }}
      className="jumbotron jumbotron-fluid align-middle"
      id="landingpage-section"
    >
      <div className="banner-text text-center text-white">
        <h4 className="fade-in display-4 font-weight-bold">Hi, I'm Lior.</h4>
        <h1 style={{ color: "white" }} className="fade-in mt-5">
          Like what you see?
          <br /> Let's Connect!
        </h1>
      </div>

      <FaAngleDoubleDown className="scroll-down-hint" />
    </div>
  );
}
