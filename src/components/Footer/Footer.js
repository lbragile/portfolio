import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container py-4 text-white">
          <span className="copyright">Copyright &copy; {new Date().getFullYear()} Lior Bragilevsky </span>
          <div className="d-inline-block float-right">
            <a href="#landingpage-section" className="no-underline">
              TOP
              <FaArrowUp className="up-arrow ml-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
