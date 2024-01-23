import React from "react";

const Main = () => {
  return (
    <div className="min-h-[80vh] bg-[#F8F9FC] ps-64 py-4 pr-4">
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-[#335ACB] w-full h-40 shadow rounded"></div>
        <div className="bg-white shadow rounded"></div>
        <div className="bg-white shadow rounded"></div>
        <div className="bg-white shadow rounded"></div>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4 min-h-screen">
        <div className="row-span-3 bg-white w-full h-full"></div>
        <div className="col-span-2 bg-white w-full"></div>
        <div className="row-span-2 col-span-2 bg-[#335ACB] w-full"></div>
      </div>
    </div>
  );
};

export default Main;
