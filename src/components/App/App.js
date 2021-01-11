import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Navbar from "../Navbar/Navbar.js";
import LandingPage from "../LandingPage/LandingPage.js";
import Project from "../Project/Project";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer.js";

import ProjectText from "../misc/ProjectText";
import "./App.css";
function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.style.color = dark ? "white" : "black";
    document.body.style.background = dark ? "rgb(29, 31, 33)" : "#efefef";
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
      <LandingPage src="./images/banner.png" />

      <section className="projects anchor" id="project-section">
        <h2 className="text-center">
          Projects{" "}
          <span role="img" aria-label="projects are for strong minded people">
            💪
          </span>
        </h2>
        {ProjectText.map((x) => {
          return (
            <Project
              name={x.name}
              src={x.src}
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

export default App;
