import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayError = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center bg-zinc-900 text-2xl min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-serif my-3">Something went wrong!</h2>
      <button className="btn btn-error rounded btn-sm" onClick={()=>navigate('/')}>Go back</button>
    </div>
  );
};

export default DisplayError;
