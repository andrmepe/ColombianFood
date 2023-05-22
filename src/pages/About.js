import React from "react";
import ComidasFondo from "../assets/ComidasFondo.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${ComidasFondo})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Andre's Colombian Food
Since our modest beginnings in 2023 with a little space in Adelaide, Andre's Colombian food‘s development has been enlivened with the energy to cook and serve solid, Colombian-roused takeout food.
In contrast to other Colombian eateries, Andre's Colombian food was made with the explicit expectation to appear as something else.
We realize numerous individuals love Colombian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Colombian nourishment taste so great.
        </p>
      </div>
    </div>
  );
}

export default About;