import React from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="lg:container lg:mx-auto mx-2">
        <div className="columns-2 flex mt-4 gap-10">
          <div className="w-1/3">
            <SidebarDecisionMaker />
          </div>
          <div className="w-full bg-cyan-500 h-44">asd</div>
        </div>
      </div>
    </>
  );
};
