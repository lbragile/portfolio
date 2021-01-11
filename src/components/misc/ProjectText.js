import React from "react";

const ProjectText = [
  {
    name: "TabMerger",
    src: "./images/tabmerger.gif",
    alt: "Quick demo of TabMerger showing what a sample use case is like",
    description: (
      <span>
        TabMerger, as the name suggests, merges your tabs into one location to save memory usage and increase your
        productivity. TabMerger is a cross-browser extension - currently available on Chrome, Firefox, and Edge.
      </span>
    ),
    implementation: [
      "C++, Makefile, YAML",
      "Markdown → Documentation",
      "Git → Version Control",
      "GTest → Unit Testing",
      "Continuous Integration → GitHub Actions",
      "SFML → Graphical User Interface",
    ],
    github: "https://github.com/lbragile/TabMerger",
    docs: "https://lbragile.github.io/TabMerger/",
    website: "https://lbragile.github.io/TabMerger-Extension/",
  },
  {
    name: "chessCAMO",
    src: "./images/gui.gif",
    alt: "Graphical User Interface illustration for the final product",
    description: (
      <span>
        chessCAMO is a newly proposed chess engine with a built-in variant that stands for Calculations Always Make
        Opportunities and was inspired by the very popular chess variant Crazyhouse. The "CAMO" portion comes from the
        idea that in this variant, at any turn, a player can sacrifice making a move to replace one of their pieces with
        a piece from the "piece reservoir". This has the affect of camouflaging each piece that is on the board.
      </span>
    ),
    implementation: [
      "C++, Makefile, YAML",
      "Markdown → Documentation",
      "Git → Version Control",
      "GTest → Unit Testing",
      "Continuous Integration → GitHub Actions",
      "SFML → Graphical User Interface",
    ],
    github: "https://github.com/lbragile/chessCAMO",
    docs: "https://lbragile.github.io/chessCAMO/",
  },
  {
    name: "SimplifyCOVID",
    src: "./images/covid.gif",
    alt: "Illustration of how to use the covid19 statistics site",
    description: (
      <span>
        This is an interactive map with worldwide COVID-19 global statistics updated at regular intervals using upto
        date dataset API calls. Main features include, global statistics, country hover analysis, continent selection,
        on-click graphs, and detailed tables. The core principle of the simpleglobalstats brand is simplicity which is
        why it is kept simple and elegant to provide the user with all the necessary information at their finger tips.
      </span>
    ),
    implementation: ["HTML5, CSS3, Javascript (jQuery)", "AJAX → API Communication", "Git → Version Control"],
    website: "https://www.simpleglobalstats.com/",
  },
  {
    name: "LoginPlay",
    src: "./images/login.gif",
    alt: "Demonstration of the server client communication",
    description: (
      <span>
        A client-server communication system. The logic of the tic-tac-toe game is not relevant to this project, but
        rather the overall functionality of the system is what counts. A database is integrated through NodeJS and MySQL
        (phpMyAdmin) which uses password encryption for security, email verification upon registration is made, JSON web
        tokens and cookies are used to verify users and maintain smooth status transitions over many tabs, sockets are
        used for multi-client communication through a central server, templating is used for simple markup error
        handling and code reuse.
      </span>
    ),
    implementation: [
      "HTML5, CSS3, Javascript",
      "NodeJS, ExpressJS, Socket.io → Client/Server Communication",
      "EJS Templates → Error handling",
      "MySQL → Login validation",
      "Nodemailer → Email verification",
      "Git → Version Control",
    ],
    github: "https://github.com/lbragile/LogInPlay",
  },
  {
    name: "ChatIn",
    src: "./images/chat.gif",
    alt: "Chatting with admin through a custom made chat system with login system",
    description: (
      <span>
        A chat system with an admin and users that communicate with the admin. The admin has a special namespace where
        they can see all active users that want to chat as well as "tabs" where the communication with unique users
        happens. A MongoDB database is used to persist the messages in each chat room in case of a reload/disconnect
        event.
      </span>
    ),
    implementation: [
      "HTML5, CSS3, Bootstrap4, Javascript",
      "NodeJS, ExpressJS, Socket.io → Client/Server Communication",
      "MongoDB (Mongoose) → Database",
      "Model View Controller (MVC) Design Pattern",
      "Git → Version Control",
    ],
    github: "https://github.com/lbragile/ChatIn",
  },
  {
    name: "Portfolio",
    src: "./images/portfolio.gif",
    alt: "A walkthrough my full stack developer portfolio website",
    description: (
      <span>
        This website highlights my full stack development projects and provides a means for interested guests to
        contact/connect with me. I designed my own server (as usual) and used ReactJS to create the user interface. The
        front end communicates with the server (backend) via API calls with Axios Nodemailer is used to allow users to
        connect with me (through the contact form) by sending an email to my adress with the relevant information. As
        always, when dealing with sensitive information, environment variables are implemented, rather than
        "hard-coding" the values in the public script.
      </span>
    ),
    implementation: [
      "HTML5, CSS3, Bootstrap4, Javascript",
      'ReactJS & JSX → <abbr title="User Interface">UI</abbr> (Frontend)',
      "NodeJS, ExpressJS, Socket.io → Client/Server Communication",
      "Git → Version Control",
    ],
    github: "https://github.com/lbragile/Portfolio",
  },
];

export default ProjectText;
