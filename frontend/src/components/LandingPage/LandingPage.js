import React from "react";
import "./LandingPage.css";

export default function LandingPage(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.src})` }}
      className="jumbotron jumbotron-fluid align-middle"
    >
      <div className="banner-text text-center text-white">
        <h4 className="display-4 font-weight-bold">Hi, I'm Lior.</h4>
        <h1 style={{ color: "white" }} className="mt-5">
          Like what you see?
          <br /> Let's Connect!
        </h1>
      </div>
    </div>
  );
}
