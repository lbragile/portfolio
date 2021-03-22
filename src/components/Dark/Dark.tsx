import React, { useEffect, useState } from "react";

import "./Dark.css";

export default function Dark(): JSX.Element {
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    (document.querySelector(".custom-control-input") as HTMLInputElement).checked = dark;

    document.body.style.color = dark ? "white" : "black";
    document.body.style.background = dark ? "rgb(29, 31, 33)" : "#efefef";

    // portrait image
    (document.getElementById("portrait") as HTMLImageElement).style.border =
      "3px solid " + (dark ? "white" : "#121212");

    // cards
    document.querySelectorAll(".card").forEach((x) => {
      (x as HTMLDivElement).style.background = dark ? "white" : "rgb(29, 31, 33)";
      (x as HTMLDivElement).style.color = dark ? "black" : "white";
    });

    document.querySelectorAll(".card-header, .card-footer").forEach((x) => {
      (x as HTMLDivElement).style.background = dark ? "#efefef" : "#101010";
    });

    // social media buttons
    document.querySelectorAll(".btn-light").forEach((x) => {
      (x as HTMLDivElement).style.background = dark ? "#efefef" : "#676767";
    });

    document.querySelectorAll(".btn-light svg").forEach((x) => {
      (x as HTMLDivElement).style.color = dark ? "black" : "white";
    });

    // double arrow
    (document.querySelector(".scroll-down-hint") as HTMLSpanElement).style.color = dark ? "white" : "black";

    // footer
    document.querySelectorAll(".copyright, .no-underline").forEach((x) => {
      (x as HTMLDivElement).style.color = dark ? "white" : "black";
    });
  }, [dark]);

  return (
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" id="darkMode" onChange={() => setDark(!dark)} />
      <label className="custom-control-label" htmlFor="darkMode">
        <span role="img" aria-label="light|dark indicating theme">
          🌗
        </span>
      </label>
    </div>
  );
}
