import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container py-4 text-white">
          &copy; Lior Bragilevsky {new Date().getFullYear()}
          <div className="d-inline-block float-right">
            <a href="#landingpage-section" className="no-uderline text-white">
              TOP
              <FaArrowUp className="up-arrow ml-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
