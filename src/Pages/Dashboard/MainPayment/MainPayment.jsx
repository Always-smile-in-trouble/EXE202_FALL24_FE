import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Payment from "../Payment/Payment";

const MainPayment = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Payment />
      </div>
    </div>
  );
};

export default MainPayment;
