import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
// import img1 from "../Utilities/img/img1.jpg";

const Main = () => {
  return (
    <div
      className="bg-cover bg-gray-900 bg-opacity min-h-full"
      // style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="">
        <div className="bg-slate-900 bg-opacity-30 md:bg-opacity-40 lg:bg-opacity-20 fixed z-50 px-6 min-w-full">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
