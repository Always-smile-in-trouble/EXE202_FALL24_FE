import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainUser from "../MainUser/MainUser";

const User = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainUser />
      </div>
    </div>
  );
};

export default User;
