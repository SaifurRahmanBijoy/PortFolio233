import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";

const Main = () => {
  return (
    <div className="bg-cover bg-gray-900 bg-opacity min-h-full">
      <div className="bg-slate-900 bg-opacity-30 md:bg-opacity-40 lg:bg-opacity-20 fixed z-50  min-w-full">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
