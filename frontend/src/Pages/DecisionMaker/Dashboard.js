import React from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import "../../App.css";
export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container-custome">
        <div className="columns-2 flex mt-4 gap-10">
          <SidebarDecisionMaker />
          <div style={{ width: "100vh" }}></div>
        </div>
      </div>
    </>
  );
};
