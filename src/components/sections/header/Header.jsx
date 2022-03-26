import React from "react";
import Select from "../../filters/select/Select"; 
function Header() {
   
  return (
    <>
      <div className="content-img"></div>
      <div className="content-filter">
        <p className="pagination">page...</p>
        <div className="content-form">
          <form action="" className="form-flex">
            <p className="orderBy">Filter by: </p>
            <Select/>
             <button className="reset-filter" type="reset">
              Reset Filter
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Header;
