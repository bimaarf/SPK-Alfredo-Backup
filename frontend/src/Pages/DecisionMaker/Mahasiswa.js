import React from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import DataTable from "react-data-table-component";
import Table from "./Data/DataTable";
import data from "./Data/Data";
export const Mahasiswa = () => {
  const clickhandler = (name) => console.log("delete", name);
  return (
    <>
      <Header />
      <div className="lg:container lg:mx-auto mx-2">
        <div className="columns-2 flex mt-4 gap-10">
          <div className="md:w-1/3 hidden md:block">
            <SidebarDecisionMaker />
          </div>
          <div className="w-full">
            <Table data={data} click={clickhandler} />
          </div>
        </div>
      </div>
    </>
  );
};
