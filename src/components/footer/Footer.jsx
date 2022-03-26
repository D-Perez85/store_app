import React from "react";
import { NavLink } from "react-router-dom";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="footer-div">
      <NavLink className="text-footer" to="/contact">
        <p className="footer-paragraph">Made by Damián Pérez</p>
      </NavLink>
      <FontAwesomeIcon icon={faCode} />
    </div>
  );
}
export default Footer;
