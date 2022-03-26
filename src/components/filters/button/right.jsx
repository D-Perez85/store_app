import React from "react";
import "./styles.css";
import arrowright from "../../../assets/icons/arrowright.svg";
function Button() {
  return (
    <button className="arrows">
      <img src={arrowright} alt="icon-arrow" />
    </button>
  );
}

export default Button;