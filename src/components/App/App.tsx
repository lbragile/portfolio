import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";

import Navbar from "../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import Project from "../Project/Project";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Dark from "../Dark/Dark";

import ProjectText, { IProject } from "../misc/ProjectText";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Navbar />
      <LandingPage />
      <Dark />

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
    </React.Fragment>
  );
}
