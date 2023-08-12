import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero--container">
      <h2>You got the travel plans, we got the travel vans.</h2>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="hero--btn">
        Find your van
      </Link>
    </div>
  );
};

export default Hero;
