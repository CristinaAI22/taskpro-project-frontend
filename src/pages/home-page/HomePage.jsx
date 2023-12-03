import React from "react";
import Navbar from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar"; 

export const Home = () => { 
  return (
    <div className="home d-flex">
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
