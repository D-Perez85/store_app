import React from "react";
import Card from '../productCard/Card'; 
function Product({itemSlice}) {
  return (
    <>
      <div className="content-product">
        <div className="product-list">
        {itemSlice.map((value)=>{
          return <Card key={value.id}  {...value}/>
        })}
 
        </div>
      </div>
    </>
  );
}
export default Product;
