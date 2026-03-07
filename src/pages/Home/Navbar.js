import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menus = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Experience" },
    { id: 6, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full h-20 px-8 bg-black/70 backdrop-blur z-20">
      {/* Logo */}
      <Link
        to="Home"
        smooth
        duration={800}
        className="cursor-pointer text-3xl font-bold font-signature"
      >
        <span className="text-green-400">Saifur</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {menus.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-green-300 hover:scale-105 transition-transform duration-200"
          >
            <Link
              to={link}
              smooth
              duration={500}
              spy
              activeClass="text-green-400"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-20 md:hidden"
      >
        {nav ? (
          <FaTimes size={24} className="text-green-400" />
        ) : (
          <FaBars size={24} className="text-green-400" />
        )}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul
          className={`flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-900 transition-transform duration-1000 ease-in-out ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {menus.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl cursor-pointer capitalize text-white hover:scale-105 transition-transform duration-200"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
