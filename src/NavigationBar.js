import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Link to="/home" />
      <Link to="/about" />
    </div>
  );
};

export default NavigationBar;
