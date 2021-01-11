import React from "react";
import "./About.css";

import { Button } from "react-bootstrap";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";

export default function About() {
  return (
    <div className="container" id="about-section">
      <h1 className="display-4 font-weight-bolder pt-3 text-center">About Me</h1>
      <div className="row align-items-center">
        <div className="about-img text-center my-3 col-lg-6">
          <img
            align="center"
            className="github-stats"
            src="https://camo.githubusercontent.com/292dee8299f2ad8e33b6eb9c2dfddeeb118c096af5e60d1f8b1d0d29ed0061c7/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6c62726167696c6526636f756e745f707269766174653d747275652673686f775f69636f6e733d7472756526637573746f6d5f7469746c653d4c696f72277325323047697448756225323053746174697374696373267468656d653d6461726b267469746c655f636f6c6f723d66666666666626746578745f636f6c6f723d6339636163632669636f6e5f636f6c6f723d3262626338612662675f636f6c6f723d316431663231266c696e655f6865696768743d3237"
            alt="GitHub Statistics"
            data-canonical-src="https://github-readme-stats.vercel.app/api?username=lbragile&amp;count_private=true&amp;show_icons=true&amp;custom_title=Lior's%20GitHub%20Statistics&amp;theme=dark&amp;title_color=ffffff&amp;text_color=c9cacc&amp;icon_color=2bbc8a&amp;bg_color=1d1f21&amp;line_height=27"
          />
          <img
            align="center"
            className="top-lang"
            src="https://camo.githubusercontent.com/b416be1960b979a0b8899539ccd77ab7aea8d9b90001e0fd92d2d774d035a262/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6c62726167696c65266c616e67735f636f756e743d33266578636c7564655f7265706f3d636865737343414d4f26637573746f6d5f7469746c653d4c696f722773253230546f702532304c616e677561676573267468656d653d6461726b267469746c655f636f6c6f723d66666666666626746578745f636f6c6f723d6339636163632669636f6e5f636f6c6f723d3262626338612662675f636f6c6f723d31643166323126636172645f77696474683d333035"
            alt="Top Languages"
            data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=lbragile&amp;langs_count=3&amp;exclude_repo=chessCAMO&amp;custom_title=Lior's%20Top%20Languages&amp;theme=dark&amp;title_color=ffffff&amp;text_color=c9cacc&amp;icon_color=2bbc8a&amp;bg_color=1d1f21&amp;card_width=305"
          />
        </div>
        <div className="about-text text-justify pb-3 col-lg-6">
          I graduated with a MASc (<em>Accelerated Program - First Class with Distinction</em>) from Simon Fraser
          University in April 2020. This comes after completing my BASc (<em>Honours with Distinction</em>) in
          Engineering, again, at SFU in August 2018. During this time, I worked on a variety of machine learning
          projects and enhanced my coding skills both in a team and individual setting. I <em>love</em> learning new &
          interesting topics. I also enjoy constantly applying my knowledge to unique problems in order to solve and
          overcome obstacles that seemed insurmountable at first. In my free time, I play chess, write code, work out,
          and relax with friends.
          <div>
            <div className="text-center my-4">
              <a href="https://github.com/lbragile/" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size="3rem" color="black" />
              </a>
              <a
                href="https://www.linkedin.com/in/liorbragilevsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1"
              >
                <FaLinkedin size="3rem" />
              </a>
            </div>
            <div className="text-center">
              <Button
                className="font-weight-bold mb-2"
                variant="primary"
                data-toggle="collapse"
                data-target="#resume-frame"
                aria-expanded="false"
                aria-controls="resume-frame"
              >
                Preview Resume
              </Button>
              <div className="collapse" id="resume-frame">
                <iframe src="other/resume.pdf" title="preview-resume" className="preview-resume" />
                <span>
                  <a className="btn btn-warning font-weight-bold mt-1" href="other/resume.pdf" download>
                    <FcDownload size="1.5rem" /> Download <FcDownload size="1.5rem" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
