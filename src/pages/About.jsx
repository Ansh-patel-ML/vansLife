import React from "react";
import aboutHero from "../assets/aboutHero.svg";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <>
      <img src={aboutHero} alt="" className="about--image" />
      <div className="about--container">
        <div className="about--content">
          <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about--navigation--card">
          <h2 className="card--text--one">Your destination is waiting.</h2>
          <h2 className="card--text--two">Your van is ready.</h2>
          <Link to="/vans" className="link">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
