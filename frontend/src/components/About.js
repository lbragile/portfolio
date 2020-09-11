import React from "react";

export default function About() {
  return (
    <>
      <h1>Who Am I?</h1>
      <div className="about-container">
        <img
          className="about-portrait"
          src="images/portrait.jpeg"
          alt="Me playing chess in nature"
        />
        <p className="about-text">
          I graduated with a MASc (
          <em>Accelerated Program - First Class with Distinction</em>) from
          Simon Fraser University in April 2020. This comes after completing my
          BASc (<em>Honours with Distinction</em>) in Engineering, again, at SFU
          in August 2018. During this time, I worked on a variety of machine
          learning projects and enhanced my coding skills both in a team and
          individual setting. I <em> love </em> learning new & interesting
          topics. I also enjoy constantly apply my knowledge to unique problems
          in order to solve and overcome obstacles that seemed insurmountable at
          first. In my free time, I play chess, write code, work out, and relax
          with friends.
        </p>
      </div>
    </>
  );
}
