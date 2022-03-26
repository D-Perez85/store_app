import React from "react";

function Card() {
  return (
    <div className="product-card">
      <div className="content-hover">
      </div>
      <img
        className="product-card-img"/>

      <div className="redeem">
      </div>
      <div className="not-redeem">
        {" "}
      </div>
      <h3 className="item">NAME</h3>
      <h4 className="category">PRICE</h4>
      <div className="item-price"></div>
    </div>
  );
}
export default Card;
