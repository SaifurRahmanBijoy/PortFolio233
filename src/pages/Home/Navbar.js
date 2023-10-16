import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const menus = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    // {
    //   id: 5,
    //   link: "Blogs",
    // },
    {
      id: 6,
      link: "Contact",
    },
  ];

  return (
    <div className="navbar flex justify-between items-center fixed px-8">
      <Link
        to="/"
        className="cursor-pointer text-3xl lg:flex font-bold font-signature"
      >
        <span className="text-green-400">Saifur</span>
      </Link>

      <ul className="hidden md:flex">
        {menus.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-slate-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer px-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen bg-gradient-to-b from-black to-slate-900">
          {menus.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
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
