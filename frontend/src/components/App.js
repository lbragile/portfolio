import React from "react";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import LandingPage from "./LandingPage/LandingPage.js";
import About from "./About/About.js";
import Project from "./Project/Project";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer.js";

function App() {
  return (
    <div>
      <LandingPage src="images/banner.png" />

      <About />

      <section className="projects">
        <h1 className="display-4 font-weight-bolder pt-3 text-center">
          Projects
        </h1>
        <Project
          name="chessCAMO"
          src="images/gui.gif"
          alt="Graphical User Interface illustration for the final product"
          description={[
            "chessCAMO is a newly proposed chess engine with a built-in variant that stands for ",
            <strong key={uuid()}>C</strong>,
            "alculations ",
            <strong key={uuid()}>A</strong>,
            "lways ",
            <strong key={uuid()}>M</strong>,
            "ake ",
            <strong key={uuid()}>O</strong>,
            "pportunities and was inspired by the very popular chess variant ",
            <a href="https://en.wikipedia.org/wiki/Crazyhouse" key={uuid()}>
              Crazyhouse
            </a>,
            '. The "CAMO" portion comes from the idea that in this variant, at any turn, a player can sacrifice making a move to replace one of their pieces with a piece from the "piece reservoir". This has the affect of camouflaging each piece that is on the board.',
          ]}
          implementation={[
            <ul key={uuid()}>
              <li key={uuid()}>C++, Makefile, YAML</li>
              <li key={uuid()}>Markdown {"→"} Documentation</li>
              <li key={uuid()}>Git {"→"} Version Control</li>
              <li key={uuid()}>GTest {"→"} Unit Testing</li>
              <li key={uuid()}>Continuous Integration {"→"} GitHub Actions</li>
              <li key={uuid()}>SFML {"→"} Graphical User Interface</li>
            </ul>,
          ]}
          github="https://github.com/lbragile/chessCAMO"
          docs="https://lbragile.github.io/chessCAMO/"
        />
        <Project
          name="SimplifyCOVID"
          src="images/covid.gif"
          alt="Illustration of how to use the covid19 statistics site"
          description={[
            "This is an interactive map with worldwide COVID-19 global statistics updated at regular intervals using upto date dataset API calls. Main features include, global statistics, country hover analysis, continent selection, on-click graphs, and detailed tables. The core principle of the simpleglobalstats brand is ",
            <em key={uuid()}>simplicity</em>,
            ", which is why it is kept simple and elegant to provide the user with all the necessary information at their finger tips.",
          ]}
          implementation={[
            <ul key={uuid()}>
              <li key={uuid()}>HTML5, CSS3, Javascript (jQuery)</li>
              <li key={uuid()}>AJAX {"→"} API Communication</li>
              <li key={uuid()}>Git {"→"} Version Control</li>
            </ul>,
          ]}
          website="https://www.simpleglobalstats.com/"
        />
        <Project
          name="LoginPlay"
          src="images/login.gif"
          alt="Demonstration of the server client communication"
          description={[
            "A client-server communication system. The logic of the tic-tac-toe game is not relevant to this project, but rather the overall functionality of the system is what counts. A database is integrated through NodeJS and MySQL (phpMyAdmin) which uses password encryption for security, email verification upon registration is made, JSON web tokens and cookies are used to verify users and maintain smooth status transitions over many tabs, sockets are used for multi-client communication through a central server, templating is used for simple markup error handling and code reuse.",
          ]}
          implementation={[
            <ul key={uuid()}>
              <li key={uuid()}>HTML5, CSS3, Javascript</li>
              <li key={uuid()}>
                NodeJS, ExpressJS, Socket.io {"→"} Client/Server Communication
              </li>
              <li key={uuid()}>EJS Templates {"→"} Error handling</li>
              <li key={uuid()}>MySQL {"→"} Login validation</li>
              <li key={uuid()}>Nodemailer {"→"} Email verification </li>
              <li key={uuid()}>Git {"→"} Version Control</li>
            </ul>,
          ]}
          github="https://github.com/lbragile/LogInPlay"
        />
        <Project
          name="ChatIn"
          src="images/chat.gif"
          alt="Chatting with admin through a custom made chat system with login system"
          description={[
            'A chat system with an admin and users that communicate with the admin. The admin has a special namespace where they can see all active users that want to chat as well as "tabs" where the communication with unique users happens. A MongoDB database is used to persist the messages in each chat room in case of a reload/disconnect event.',
          ]}
          implementation={[
            <ul key={uuid()}>
              <li key={uuid()}>HTML5, CSS3, Bootstrap4, Javascript</li>
              <li key={uuid()}>
                NodeJS, ExpressJS, Socket.io {"→"} Client/Server Communication
              </li>
              <li key={uuid()}>MongoDB (Mongoose) {"→"} Database</li>
              <li key={uuid()}>Model View Controller (MVC) Design Pattern</li>
              <li key={uuid()}>Git {"→"} Version Control</li>
            </ul>,
          ]}
          github="https://github.com/lbragile/ChatIn"
        />
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
