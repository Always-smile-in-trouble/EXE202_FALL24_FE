import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="text-3xl font-bold mt-10 ml-8 mb-8">Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
