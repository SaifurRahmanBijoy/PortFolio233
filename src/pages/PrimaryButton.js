import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="bg-transparent btn rounded px-5 py-1 border-slate-600 border text-slate-200 hover:text-white hover:shadow-[inset_20rem_0_0_0] hover:shadow-green-400 duration-[900ms,700ms] transition-[color,box-shadow]">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
