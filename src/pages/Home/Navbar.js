import React from "react";
import { Link } from "react-router-dom";
// import { SiMinutemailer, SiAboutdotme, SiBloglovin } from "react-icons/si";
// import { AiFillHome } from "react-icons/ai";
import mail from "../../Utilities/mail.svg";
import about from "../../Utilities/about.svg";
import blog from "../../Utilities/blog.svg";
import home from "../../Utilities/home.svg";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="hover:text-green-400">
        <Link to="/">
          <span className="md:hidden">
            <img className="w-5" src={home} alt="" />
          </span>
          <span className="hidden md:flex">Home</span>
        </Link>
      </li>
      <li className="hover:text-green-400">
        <Link to="/blogs">
          <span className="md:hidden text-md">
            <img className="w-5" src={blog} alt="" />
          </span>
          <span className="hidden md:flex">Blogs</span>
        </Link>
      </li>
      <li className="hover:text-green-400">
        <Link to="/about">
          <span className="md:hidden text-2xl">
            <img className="w-6" src={about} alt="" />
          </span>
          <span className="hidden md:flex">About Me</span>
        </Link>
      </li>
      <li className="hover:text-green-400">
        <a href="https://form.jotform.com/223435153371046">
          <span className="md:hidden">
            <img className="w-6" src={mail} alt="" />
          </span>
          <span className="hidden md:flex">Contact Me</span>
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar lg:justify-between justify-center items-center">
      <Link
        to="/"
        className="text-3xl lg:navbar-start hidden lg:flex font-bold"
      >
        Port<span className="text-green-400">folio</span>
      </Link>
      <div className="">
        <ul className="menu menu-compact menu-horizontal uppercase text-slate-300">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
