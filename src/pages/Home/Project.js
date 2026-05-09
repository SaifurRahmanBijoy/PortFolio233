import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ project, setModalProject }) => {
  const { live, client, img1, features, tech } = project;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const techArray = Array.isArray(tech)
    ? tech
    : typeof tech === "string"
    ? tech.split(",")
    : [];

  return (
    <div
      className="shadow-md shadow-gray-600 rounded-lg w-full my-3 md:my-6 overflow-hidden"
      data-aos="fade-up"
    >
      {/* IMAGE */}
      <div className="relative group overflow-hidden">
        <img
          src={img1}
          alt=""
          className="w-full rounded-md duration-300 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-end p-4 opacity-0 md:opacity-100 md:translate-y-full md:group-hover:translate-y-0 transition-all duration-300 pointer-events-none md:pointer-events-auto">
          <p className="text-sm mb-3">
            {features || "No description available"}
          </p>

          <div className="flex flex-wrap gap-2">
            {techArray.map((t, i) => (
              <span
                key={i}
                className="text-[11px] px-3 py-1 rounded-full bg-blue-600 text-white border border-blue-300/30"
              >
                {t.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 p-3">
        <a href={live} target="_blank" rel="noreferrer">
          Demo
        </a>

        <a href={client} target="_blank" rel="noreferrer">
          Code
        </a>

        <label
          htmlFor="project"
          className="cursor-pointer hover:scale-105 transition text-slate-200 hover:text-white"
          onClick={() => setModalProject(project)}
        >
          Details
        </label>
      </div>
    </div>
  );
};

export default Project;
