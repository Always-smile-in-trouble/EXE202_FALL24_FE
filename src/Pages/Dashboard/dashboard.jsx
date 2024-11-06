import React from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar/Sidebar.jsx";
import MainDash from "./MainDash/MainDash.jsx";

function Dashboard() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
      </div>
    </div>
  );
}

export default Dashboard;
