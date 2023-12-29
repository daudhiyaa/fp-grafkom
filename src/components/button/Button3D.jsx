import React from "react";
import "./button3d.css";

const Button3D = ({ buttonTitle, className }) => {
  return <button className={`btn-3d ${className}`}>{buttonTitle}</button>;
};

export default Button3D;
