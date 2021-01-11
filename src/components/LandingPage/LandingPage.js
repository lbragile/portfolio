import React from "react";
import "./LandingPage.css";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function LandingPage(props) {
  return (
    <div className="container" id="landingpage-section">
      <img src="./images/header.png" alt="Intro header showing myself, name, expertise" />
      <h1>
        Hey there! <img src="https://i.imgur.com/L1NxDZ2.gif" alt="waving hand" className="waving-hand" />
      </h1>
      <p>
        My name is Lior Bragilevsky and I am a self taught full stack developer that is always up to the challenge. I
        have firm goals to learn new things daily. My daily routine revolves around full stack projects that are of
        interest to me/for clients, play logical games like chess, workout, and hang out with friends.
      </p>

      <h2>
        Technologies Used{" "}
        <span role="img" aria-label="wrench indicating building">
          🔧
        </span>
      </h2>
      <div className="badge-icons">
        {Array(15)
          .fill(0)
          .map((x, i) => {
            return <img src={"./images/tech" + (i + 1) + ".svg"} alt="tech badge" key={Math.random()} />;
          })}
      </div>

      <FaAngleDoubleDown className="scroll-down-hint" />
    </div>
  );
}
