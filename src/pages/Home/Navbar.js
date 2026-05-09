import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menus = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Contact" },
  ];

  // Navbar shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Strong scrollSpy fix (handles mid-page bugs)
  useEffect(() => {
    Events.scrollEvent.register("end", () => {
      scrollSpy.update();
    });

    const timeout = setTimeout(() => {
      scrollSpy.update(); // after layout settles
    }, 500);

    window.addEventListener("scroll", scrollSpy.update);

    return () => {
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", scrollSpy.update);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 transition-all duration-300 ${
        scrolled
          ? "h-16 bg-[#0a0a0f]/80 backdrop-blur-md shadow-md"
          : "h-20 bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        to="Home"
        smooth
        duration={800}
        offset={-90}
        className="cursor-pointer text-3xl font-bold font-signature"
      >
        <span className="text-[#6d28d9]">Saifur</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {menus.map(({ id, link }) => (
          <li key={id} className="relative group cursor-pointer">
            <Link
              to={link}
              smooth={true}
              duration={500}
              spy={true}
              hashSpy={true}
              isDynamic={true}
              spyThrottle={100} // 🔥 improves accuracy mid-scroll
              offset={-90} // 🔥 fix for navbar height
              activeClass="active text-[#6d28d9]"
              className="peer text-gray-300 transition-colors duration-300"
            >
              {link}
            </Link>

            {/* underline (hover + active) */}
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] bg-[#06b6d4] w-0
                transition-all duration-300
                group-hover:w-full
                peer-[.active]:w-full
              "
            ></span>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-50 md:hidden text-[#6d28d9]"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-[#0a0a0f] transition-all duration-500 ease-in-out md:hidden ${
          nav
            ? "max-h-screen opacity-100 py-20"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {menus.map(({ id, link }) => (
            <li key={id} className="text-3xl">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                hashSpy={true}
                isDynamic={true}
                spyThrottle={100}
                offset={-90}
                activeClass="text-[#6d28d9]"
                className="text-gray-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
