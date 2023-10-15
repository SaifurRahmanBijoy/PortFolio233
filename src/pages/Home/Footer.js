import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-25 py-4 w-11/12 mx-auto rounded-t-2xl">
      <div className="max-w-screen px-4 mx-auto">
        <span
          className="hidden md:flex text-sm justify-center pb-3 font-mono bg-gradient-to-l bg-clip-text text-transparent from-green-600 via-green-100 to-slate-50 animate-text"
        >
          Saifur Rahman
        </span>
        <div className="flex w-9/12 md:w-7/12 lg:w-5/12 mx-auto items-center justify-between">
          <a
            href="https://www.facebook.com/b1joy/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            <AiFillFacebook></AiFillFacebook>
          </a>
          <a
            href="https://www.instagram.com/bi_j_oy/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            <SiInstagram></SiInstagram>
          </a>
          <a
            href="https://www.github.com/SaifurRahmanBijoy/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            <SiGithub></SiGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/saifur-rahman-2a8bb0240/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            <SiLinkedin></SiLinkedin>
          </a>
          <a
            href="https://wa.me/8801859401509?text=Hello!"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-green-400"
          >
            <SiWhatsapp></SiWhatsapp>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
