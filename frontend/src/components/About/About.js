import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="display-3 font-weight-bolder pt-3 text-center">
          Who Am I?
        </h1>
        <table className="about-container table table-borderless">
          <tbody>
            <tr>
              <td className="align-middle">
                <p className="about-text text-white">
                  I graduated with a MASc (
                  <em>Accelerated Program - First Class with Distinction</em>)
                  from Simon Fraser University in April 2020. This comes after
                  completing my BASc (<em>Honours with Distinction</em>) in
                  Engineering, again, at SFU in August 2018. During this time, I
                  worked on a variety of machine learning projects and enhanced
                  my coding skills both in a team and individual setting. I{" "}
                  <em>love</em> learning new & interesting topics. I also enjoy
                  constantly apply my knowledge to unique problems in order to
                  solve and overcome obstacles that seemed insurmountable at
                  first. In my free time, I play chess, write code, work out,
                  and relax with friends.
                </p>
              </td>
              <td className="about-img">
                <img
                  className="figure-img img-fluid rounded border border-white"
                  src="images/portrait.jpeg"
                  alt="Me playing chess outdoors"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
