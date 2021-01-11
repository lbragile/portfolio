import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Navbar from "./Navbar/Navbar.js";
import LandingPage from "./LandingPage/LandingPage.js";
import About from "./About/About.js";
import Project from "./Project/Project";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer.js";

import ProjectText from "./misc/ProjectText";
function App() {
  return (
    <div>
      <LandingPage src="images/banner.png" />
      <Navbar />
      <About />

      <section className="projects anchor">
        <h1 className="display-4 font-weight-bolder pt-3 text-center">Projects</h1>
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
