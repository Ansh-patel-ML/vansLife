import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./Vans.css";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div className="van--container">
      <h2>Explore our van options</h2>
      <div className="vansCard--container">
        {vans.map((van) => {
          return (
            <div className="vanInfo--card" key={van.id}>
              <img src={van.imageUrl} alt="" className="van--image" />
              <div className="van--details">
                <h4>{van.name}</h4>
                <h4>${van.price}</h4>
              </div>
              <div className="van--type--container">
                <Button type={van.type}>{van.type}</Button>
                <p>/day</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vans;
