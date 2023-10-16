import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ project, setModalProject }) => {
  const { live, client, img1, id } = project;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      key={id}
      className="shadow-md shadow-gray-600 rounded-lg max-w-screen my-3 md:my-6 lg:mx-2"
    >
      <img
        src={img1}
        alt=""
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="flex items-center justify-center">
        <a
          href={live}
          className="sm:px-2 md:px-6 py-3 m-4 text-center hover:scale-105 text-slate-200 hover:text-white duration-200"
        >
          Demo
        </a>
        <a
          href={client}
          className="sm:px-2 md:px-6 py-3 m-4 text-center hover:scale-105 text-slate-200 hover:text-white duration-200"
        >
          Code
        </a>
        <label
          htmlFor="project"
          className="sm:px-2 md:px-6 py-3 m-4 text-center hover:scale-105 text-slate-200 hover:text-white duration-200"
          onClick={() => setModalProject(project)}
        >
          Details
        </label>
      </div>
    </div>
  );
};

export default Project;
