import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      {/* <button className="bg-transparent btn rounded px-5 py-1 border-slate-600 border text-slate-200 hover:text-white hover:shadow-[inset_20rem_0_0_0] hover:shadow-green-400 duration-[900ms,700ms] transition-[color,box-shadow]">
        {children}
      </button> */}
      <button className="btn border-slate-600 bg-transparent hover:bg-green-500 shadow-[0_5px_0_rgb(26,251,131,0.3)] hover:shadow-[0_1px_0px_rgb(26,251,131,0.3)] text-white ease-out hover:translate-y-1 duration-[900ms,700ms] transition-all rounded">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
