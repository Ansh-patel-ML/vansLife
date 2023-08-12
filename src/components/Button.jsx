import React from "react";
import "./Button.css";
const Button = ({ children, type }) => {
  return (
    <div
      className={
        type === "simple"
          ? "van--type simple"
          : type === "luxury"
          ? "van--type luxury"
          : "van--type rugged"
      }
    >
      {children}
    </div>
  );
};

export default Button;
