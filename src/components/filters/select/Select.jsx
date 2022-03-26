import React from "react";
 
function Select() {
  return (
    <>
      <select name="categories" id="">
        <option className="option" value="All Categories">
          All Categories
        </option>
      </select>

      <input
        className="input-filter"
        type="radio"
        id="lowest"
        name="filter"
        value="lowest"
       />
      <label id="order-label" for="lowest">Lower Price</label>

      <input
        className="input-filter"
        type="radio"
        id="highest"
        name="filter"
        value="highest"
       />
      <label id="order-label"  for="highest">Higher Price</label>
    </>
  );
}
export default Select;
