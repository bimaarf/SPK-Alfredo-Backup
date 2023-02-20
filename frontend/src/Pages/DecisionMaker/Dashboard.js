import React, { useState } from "react";
import { Header } from "../../Components/Header";
import { SidebarDecisionMaker } from "../../Components/SidebarDecisionMaker";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Total Penerimaan Bidikmisi UNTAN", 6],
  ["Total Non Bidikmisi UNTAN", 3],
];

export const options = {
  title: "Total Mahasiswa Untan",
};
export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto pb-10 md:pt-10">
        <div className="md:flex md:columns-2 md:gap-10">
          <SidebarDecisionMaker />
          <div className="bg-white rounded-xl w-full p-3 md:p-10 ">
            <h1 className="md:text-2xl text-xl ml-4 font-bold text-gray-600">
              SELAMAT DATANG,{" "}
            </h1>
            <h1 className="text-xl font-bold text-gray-600">
              Admin Universitas Tanjungpura
            </h1>
            <div className="md:flex justify-center items-center gap-10 mt-4">
              <div className="md:w-1/3">
                <div className="bg-cyan-600 p-5 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                  <div className="flex justify-start items-center gap-2">
                    <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                    <h1 className="text-white text-md">Data Mahasiswa</h1>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="md:grid md:grid-cols-2 grid-cols-2 gap-4">
                  <div className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">Data Kriteria</h1>
                    </div>
                  </div>
                  <div className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">Data Sub Kriteria</h1>
                    </div>
                  </div>
                  <div className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">
                        Data Olah Penilaian
                      </h1>
                    </div>
                  </div>
                  <div className="bg-cyan-600 p-5 mt-2 md:mt-0 rounded-md flex items-center justify-between hover:-mt-2 hover:mb-2 hover:bg-cyan-700 hover:shadow-xl shadow-black duration-500 ease-in-out cursor-pointer">
                    <div className="flex justify-start items-center gap-2">
                      <i className="text-white fa fa-file-text bg-white bg-opacity-20 p-2 rounded"></i>
                      <h1 className="text-white text-md">Cetak Laporan</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
