import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="not">
        <span className="one span">4</span>
        <span className="two span">0</span>
        <span class="mid span"> ops!</span>
        <span className="three span">4</span>
      </div>
      <p className="p">Mejor regresa al inicio.</p>
      <Link to="/">
        <div className="content-btn-notFound">
          <button className="btn-notFound">
            <span className="span-notFound">BACK TO HOME</span >
          </button>
        </div>
      </Link>
    </>
  );
}

export default NotFound;
