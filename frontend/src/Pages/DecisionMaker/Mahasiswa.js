import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import data from "./Data/Data";
import Table from "./Data/DataTable";
export const Mahasiswa = () => {
  const clickhandler = (name) => console.log("delete", name);
  const navRedirect = useNavigate();
  return (
    <>
      <Header />
      <div className="lg:container lg:mx-auto mx-2">
        <div className="columns-2 flex mt-4 gap-10">
          <div className="md:w-1/3 hidden md:block">
            <SidebarDecisionMaker />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-baseline">
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">
                Data Mahasiswa
              </h1>
              <button onClick={() => navRedirect('/decision-maker/mahasiswa/form')} className="mb-4 float-right text-sm px-4 py-1 md:text-xl md:px-8 md:py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 ease-in-out rounded text-white">
                Tambah Mahasiswa
              </button>
            </div>
            <Table data={data} click={clickhandler} />
          </div>
        </div>
      </div>
    </>
  );
};
