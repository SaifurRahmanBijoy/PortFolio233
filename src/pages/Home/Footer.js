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
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/saifur-rahman-2a8bb0240/",
      style: "rounded-tr-md bg-blue-900",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <SiGithub size={30} />
        </>
      ),
      href: "https://www.github.com/SaifurRahmanBijoy/",
      style: "bg-slate-900",
    },
    {
      id: 3,
      child: (
        <>
          WhatsApp
          <SiWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/8801859401509?text=Hello!",
      style: "bg-green-500",
    },
    {
      id: 4,
      child: (
        <>
          Facebook
          <AiFillFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/b1joy/",
      style: "bg-blue-900",
    },
    {
      id: 5,
      child: (
        <>
          Instagram
          <SiInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/bi_j_oy/",
      style: "bg-pink-700",
    },
    {
      id: 6,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:saifur.rahman6810@gmail.com",
      style: "bg-gray-700",
    },
    {
      id: 7,
      child: (
        <>
          Resume
          <BsPerson size={30} />
        </>
      ),
      href: "/Resume.pdf",
      style: "rounded-br-md bg-slate-500",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col top-[25%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
