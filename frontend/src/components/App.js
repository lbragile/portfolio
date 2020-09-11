import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Project from "./Project";
import ContactForm from "./ContactForm";
import Footer from "./Footer.js";
import About from "./About.js";
import LandingPage from "./LandingPage.js";

function App() {
  return (
    <div>
      <LandingPage />

      <About />

      <h1>Projects</h1>
      <Project
        name="chessCAMO"
        src="images/gui.gif"
        alt="Graphical User Interface illustration for the final product"
        description={[
          "chessCAMO is a newly proposed chess engine with a built-in variant that stands for ",
          <strong>C</strong>,
          "alculations ",
          <strong>A</strong>,
          "lways ",
          <strong>M</strong>,
          "ake ",
          <strong>O</strong>,
          "pportunities and was inspired by the very popular chess variant ",
          <a href="https://en.wikipedia.org/wiki/Crazyhouse">Crazyhouse</a>,
          '. The "CAMO" portion comes from the idea that in this variant, at any turn, a player can sacrifice making a move to replace one of their pieces with a piece from the "piece reservoir". This has the affect of camouflaging each piece that is currently on the board.',
        ]}
        implementation={[
          <ul>
            <li>C++, Makefile, YAML</li>
            <li>Markdown {"→"} Documentation</li>
            <li>Git {"→"} Version Control</li>
            <li>GTest {"→"} Unit Testing</li>
            <li>Continuous Integration {"→"} GitHub Actions</li>
            <li>SFML {"→"} Graphical User Interface</li>
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
          <em>simplicity</em>,
          ", which is why it is kept simple and elegant to allow the user to have all the necessary information at their finger tips.",
        ]}
        implementation={[
          <ul>
            <li>HTML5, CSS3, Javascript (jQuery)</li>
            <li>AJAX {"→"} API Communication</li>
            <li>Git {"→"} Version Control</li>
          </ul>,
        ]}
        website="https://www.simpleglobalstats.com/"
      />
      <Project
        name="LoginPlay"
        src="images/login.gif"
        alt="Demonstration of the server client communication"
        description={[
          "Attempt at making client-server communication using NodeJS and socket.io. The logic of the tic-tac-toe game is not relevant to this project, but rather the overall functionality of the system is what counts. A database is integrated through NodeJS and MySQL (phpMyAdmin) which uses password encryption for security, email verification upon registration is made, JSON web tokens and cookies are used to verify users and maintain smooth status transitions over many tabs, sockets are used for multi-client communication through a central server, templating is used for simple markup error handling and code reuse.",
        ]}
        implementation={[
          <ul>
            <li>HTML5, CSS3, Javascript</li>
            <li>NodeJS, Socket.io</li>
            <li>EJS Templates {"→"} Simple markup error handling</li>
            <li>MySQL {"→"} Login validation</li>
            <li>Nodemailer {"→"} Email verification </li>
            <li>Git {"→"} Version Control</li>
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
          <ul>
            <li>HTML5, CSS3, Bootstrap4, Javascript</li>
            <li>NodeJS, ExpressJS, MongoDB, Socket.io</li>
            <li>Model View Controller (MVC) Design Pattern</li>
            <li>Git {"→"} Version Control</li>
          </ul>,
        ]}
        github="https://github.com/lbragile/ChatIn"
      />

      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;
