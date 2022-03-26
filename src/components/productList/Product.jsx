import React from "react";
import Card from '../productCard/Card'; 
function Product({itemSlice}) {
  return (
    <>
      <div className="content-product">
        <div className="product-list">
        {itemSlice.map((product) => {
            return <Card key={product._id} product={product} />;
          })}
 
        </div>
      </div>
    </>
  );
}
export default Product;
