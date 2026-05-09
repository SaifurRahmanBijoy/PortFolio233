import React from "react";
import { Link } from "react-scroll";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <Link
        to="Projects"
        smooth
        duration={500}
        className="btn group border-slate-600 bg-transparent hover:bg-[#6d28d9] shadow-[0_5px_0_rgba(109,40,217,0.3)] hover:shadow-[0_1px_0px_rgba(109,40,217,0.3)] text-white ease-out hover:translate-y-1 duration-[900ms,700ms] transition-all rounded cursor-pointer"
      >
        {children}
      </Link>
    </div>
  );
};

export default PrimaryButton;
