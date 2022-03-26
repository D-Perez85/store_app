import React from "react";

function Card({img,name, price}) {
  return (
    <div className="product-card">
      <div className="content-hover">
      </div>
      <img
        className="product-card-img"
        src={img.url}
        alt={name}
        />

      <div className="redeem">
      </div>
      <div className="not-redeem">
        {" "}
      </div>
      <h3 className="item">{name}</h3>
      <h4 className="category">{price}</h4>
      <div className="item-price"></div>
    </div>
  );
}
export default Card;
