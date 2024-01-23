import React from "react";
const Header = () => {
  return (
    <>
      <div className="ps-64 flex justify-end p-5 gap-4 bg-white drop-shadow">
        <div className="flex items-center">
          <i className="ri-search-line bg-[#335ACB] text-white text-xl px-2 rounded-tl rounded-bl h-full pt-1"></i>
          <input className="border ps-2 h-full w-72" type="text" name="" id="" placeholder="Search" />
        </div>
        <i className="ri-account-circle-line text-3xl"></i>
      </div>
    </>
  );
};

export default Header;
