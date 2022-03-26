import React from "react";
 import coin from "../../assets/icons/coin.svg";
 
 function Users() {
 
   return (
    <div className="content-users">
      <div className="user">
        <h5>Name</h5>
        <img src={coin} alt="user-coins" className="coins" />
            Points
      </div>
    </div>
  );
}
export default Users;
