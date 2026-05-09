import React from "react";

import { AiFillFacebook } from "react-icons/ai";
import { SiGithub, SiInstagram, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/saifur-rahman-2a8bb0240/",
      style: "bg-blue-900",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <SiGithub size={30} />
        </>
      ),
      href: "https://www.github.com/SaifurRahmanBijoy/",
      style: "bg-slate-900",
    },
    {
      id: 3,
      child: (
        <>
          WhatsApp <SiWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/8801859401509?text=Hello!",
      style: "bg-green-500",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <AiFillFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/b1joy/",
      style: "bg-blue-900",
    },
    {
      id: 5,
      child: (
        <>
          Instagram <SiInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/bi_j_oy/",
      style: "bg-pink-700",
    },
    {
      id: 6,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:saifur.rahman6810@gmail.com",
      style: "bg-gray-700",
    },
    {
      id: 7,
      child: (
        <>
          Resume <BsPerson size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "bg-slate-500",
      download: true,
    },
  ];

  return (
    <>
      {/* ================= SIDEBAR (md+) ================= */}
      <div className="hidden md:flex flex-col fixed top-1/2 -translate-y-1/2 left-0 z-50">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={`group relative flex items-center justify-between w-36 h-14 px-4 -ml-24 hover:ml-0 transition-all duration-300 overflow-hidden ${style}`}
            >
              {/* glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-300" />

              <a
                href={href}
                download={download ? true : undefined}
                target={download ? undefined : "_blank"}
                rel="noreferrer"
                className="relative flex justify-between items-center w-full text-white"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="w-full text-white border-t border-slate-800 py-6 text-sm">
        <div className="w-7/12 mx-auto flex flex-col items-center gap-6">
          {/* NAME (TAILWIND GRADIENT ANIMATION) */}
          <div className="flex items-center gap-1 font-signature font-bold text-2xl">
            <span
              className="
                bg-gradient-to-r from-violet-500 via-cyan-400 via-pink-500 to-violet-500
                bg-[length:300%_300%]
                animate-[gradientMove_5s_ease_infinite]
                bg-clip-text text-transparent
              "
            >
              Saifur
            </span>
            <span>Rahman</span>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="flex md:hidden flex-wrap justify-center gap-3">
            {links.map(({ id, child, href, style, download }) => (
              <a
                key={id}
                href={href}
                download={download ? true : undefined}
                target={download ? undefined : "_blank"}
                rel="noreferrer"
                className={`group relative flex items-center gap-2 px-3 py-2 rounded-md text-white overflow-hidden transition duration-300 hover:scale-105 ${style}`}
              >
                {/* glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-300" />

                <span className="relative flex items-center gap-2">
                  {child}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind keyframes (ONLY needed once in global CSS) */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default Footer;
