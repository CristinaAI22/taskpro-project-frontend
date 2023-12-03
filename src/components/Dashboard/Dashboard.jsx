import React from "react";
import Navbar from "../header/Header";
import Sidebar from "../Sidebar/Sidebar"; 

export const Dashboard = () => { 
  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      > <h1>Dashboard</h1>
        {/* <Navbar />     */}
      </div>
    </div>
  );
};
