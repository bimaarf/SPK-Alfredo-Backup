import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { DataKriteria } from "./DataKriteria";
import { FormKriteria } from "./FormKriteria";
export const ModalKriteria = ({ getKriteria, getDashboard }) => {
  const [isActive, setIsActive] = useState("Form-tambah");
  return (
    <>
      <input type="checkbox" id="form-kriteria" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl">
          <div className="flex justify-center gap-2 bg-gray-200 border p-1 rounded-full mt-4">
            <button
              onClick={() => setIsActive("Form-tambah")}
              className={`${
                isActive === "Form-tambah" && "bg-white"
              } m-1 px-2 py-2 rounded-full w-full text-sm md:text-md text-slate-700 font-semibold transition-all duration-300`}
            >
              Tambah Kriteria
            </button>
            <button
              onClick={() => setIsActive("Data")}
              className={`${
                isActive === "Data" && "bg-white"
              } m-1 px-3 py-3 rounded-full w-full text-sm md:text-md text-slate-700 font-semibold transition-all duration-300`}
            >
              Data Kriteria
            </button>
          </div>
          {isActive === "Form-tambah" ? (
            <FormKriteria getDashboard={getDashboard} />
          ) : (
            <DataKriteria
              getDashboard={getDashboard}
              getKriteria={getKriteria}
            />
          )}
        </div>
      </div>
    </>
  );
};
