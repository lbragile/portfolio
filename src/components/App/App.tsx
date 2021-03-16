import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import Project from "../Project/Project";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

import ProjectText, { IProject } from "../misc/ProjectText";
import "./App.css";

export default function App(): JSX.Element {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    (document.querySelector(".custom-control-input") as HTMLInputElement).checked = dark;

    document.body.style.color = dark ? "white" : "black";
    document.body.style.background = dark ? "rgb(29, 31, 33)" : "#efefef";

    // portrait image
    (document.getElementById("portrait") as HTMLImageElement).style.border =
      "3px solid " + (dark ? "white" : "#121212");

    // cards
    document.querySelectorAll(".card").forEach((x) => {
      (x as HTMLDivElement).style.background = dark ? "white" : "rgb(29, 31, 33)";
      (x as HTMLDivElement).style.color = dark ? "black" : "white";
    });

    document.querySelectorAll(".card-header, .card-footer").forEach((x) => {
      (x as HTMLDivElement).style.background = dark ? "#efefef" : "#101010";
    });

    // social media buttons
    document.querySelectorAll(".btn-light").forEach((x) => {
      (x as HTMLDivElement).style.background = dark ? "#efefef" : "#676767";
    });

    document.querySelectorAll(".btn-light svg").forEach((x) => {
      (x as HTMLDivElement).style.color = dark ? "black" : "white";
    });

    // double arrow
    (document.querySelector(".scroll-down-hint") as HTMLSpanElement).style.color = dark ? "white" : "black";

    // footer
    document.querySelectorAll(".copyright, .no-underline").forEach((x) => {
      (x as HTMLDivElement).style.color = dark ? "white" : "black";
    });
  }, [dark]);

  return (
    <div>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="darkMode" onChange={() => setDark(!dark)} />
        <label className="custom-control-label" htmlFor="darkMode">
          <span role="img" aria-label="light|dark indicating theme">
            🌗
          </span>
        </label>
      </div>

      <Navbar />
      <LandingPage />

      <section className="projects anchor" id="project-section">
        <h2 className="text-center">
          Projects{" "}
          <span role="img" aria-label="projects are for strong minded people">
            💪
          </span>
        </h2>
        {ProjectText.map((x: IProject) => {
          return (
            <Project
              name={x.name}
              src={x.src}
              youtube={x.youtube}
              alt={x.alt}
              description={x.description}
              implementation={x.implementation}
              github={x.github}
              docs={x.docs}
              website={x.website}
              key={Math.random()}
            />
          );
        })}
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}
