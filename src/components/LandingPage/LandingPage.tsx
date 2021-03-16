import React, { useRef, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

import { Button } from "react-bootstrap";
import { FaReddit, FaStackOverflow } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import STATS, { IStats } from "../misc/GitHubStats";
import "./LandingPage.css";

export interface ILinks {
  url: string;
  text: string;
  icon: JSX.Element;
}

export default function LandingPage() {
  const LINKS = useRef<Array<ILinks>>([
    { url: "https://github.com/lbragile/", text: "GitHub", icon: <AiFillGithub size="1.4rem" color="black" /> }, // prettier-ignore
    { url: "https://www.linkedin.com/in/liorbragilevsky/", text: "LinkedIn", icon: <AiFillLinkedin size="1.4rem" color="black" /> }, // prettier-ignore
    { url: "https://stackoverflow.com/users/4298115/lbragile", text: "StackOverflow", icon: <FaStackOverflow size="1.4rem" color="black" /> }, // prettier-ignore
    { url: "https://www.reddit.com/user/lbragile_dev", text: "Reddit", icon: <FaReddit size="1.4rem" color="black" /> }, // prettier-ignore
  ]);

  var resumeRef = useRef<HTMLDivElement>(null);

  const [resume, setResume] = useState<boolean>(false);

  function handleResumeClick() {
    const resumeBtn = resumeRef.current;
    if (resumeBtn) {
      resumeBtn.style.opacity = (+!resume).toString();
      resumeBtn.style.width = resume ? "0" : "auto";
      resumeBtn.style.height = resume ? "0" : "auto";
      resumeBtn.style.left = resume ? "-1000px" : "0";

      resumeBtn.style.transition = "opacity 1s";
      resumeBtn.style.transition = "left 1s";

      setResume(!resume);
    }
  }
  return (
    <div className="container" id="landingpage-section">
      <div className="row mt-4 mb-5 d-flex align-items-center">
        <div className="col-sm-2">
          <img src="./images/portrait.png" alt="My portrait" id="portrait" />
        </div>
        <div className="col-sm-10">
          {/* <img src="./images/header.png" alt="My name name & expertise" id="header-title" /> */}
          <p className="header-title top-title">Lior Bragilevsky</p>
          <p className="header-title bottom-title">Full Stack Developer & DevOps Engineer</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6" id="about-section">
          <h2>
            Hey there! <img src="https://i.imgur.com/L1NxDZ2.gif" alt="waving hand" className="waving-hand" />
          </h2>
          <p className="text-justify">
            My name is Lior Bragilevsky and I am a self taught full stack developer & DevOps Engineer that is always up
            to the challenge. I have firm goals to learn new things daily. My daily routine revolves around full stack
            projects that are of interest to me/for clients, play logical games like chess, workout, and hang out with
            friends.
          </p>
          <p className="text-justify">
            I graduated with a MASc (Accelerated Program - First Class with Distinction) from Simon Fraser University in
            April 2020. This comes after completing my BASc (Honours with Distinction) in Engineering, again, at SFU in
            August 2018. During this time, I worked on a variety of machine learning projects and enhanced my coding
            skills both in a team and individual setting. Ever since, I haven't looked back and am a proud author of
            many open source projects.
          </p>

          <p className="text-justify">
            I think it is very important to maintain a social media presence as that is where you can ask questions from
            more experienced users, connect & network with other developers, or even just help out others who are stuck
            on a step that you figured out a while ago. Feel free to reach out to me at any of the following social
            media platforms.
            <span className="d-flex justify-content-center row my-4">
              {LINKS.current.map(
                (x: ILinks, i): JSX.Element => {
                  return (
                    <Button
                      variant="light"
                      className={i > 0 ? "ml-1" : ""}
                      onClick={() => window.open(x.url, "_blank")}
                      key={Math.random()}
                    >
                      {x.icon}
                    </Button>
                  );
                }
              )}
            </span>
          </p>

          <div className="text-center">
            <Button className="mb-2 font-weight-bold" variant="primary" onClick={() => handleResumeClick()}>
              {resume ? "🙈 Resume" : "🙉 Resume"}
            </Button>
            <div id="resume-frame" ref={resumeRef}>
              <iframe src="other/resume.pdf" title="Preview Resume" className="preview-resume" />
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <h2>
            Tools{" "}
            <span role="img" aria-label="wrench indicating building">
              🔧
            </span>
          </h2>
          <div className="badge-icons">
            {Array(15)
              .fill(0)
              .map((_, i) => {
                return <img src={"./images/badges/tech" + (i + 1) + ".svg"} alt="tech badge" key={Math.random()} />;
              })}
          </div>

          <h2>
            Stats{" "}
            <span role="img" aria-label="wrench indicating building">
              📈
            </span>
          </h2>
          <div className="about-img text-center d-flex flex-wrap justify-content-justify-content-between">
            {STATS.map(
              (x: IStats): JSX.Element => {
                return <img className={x.class + " my-1"} src={x.src} alt={x.alt} key={Math.random()} />;
              }
            )}
          </div>
        </div>
      </div>

      <a href="#project-section">
        <FaAngleDoubleDown className="scroll-down-hint" />
      </a>
    </div>
  );
}
