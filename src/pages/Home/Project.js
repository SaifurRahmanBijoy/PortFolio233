import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";

const Project = ({ project, setModalProject }) => {
  const { name, tech, img1 } = project;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="card rounded-full bg-black shadow-2xl hover:bg-slate-900 hover:border hover:border-slate-700 my-4 md:my-8 lg:my-16"
      data-aos="zoom-in"
    >
      <div className="new">
        <img
          id="box"
          className="shadow-xl rounded-lg w-9/12 mx-auto"
          src={img1}
          alt=""
        />
      </div>
      <div className="card-body text-center">
        <h2 className="card- text-2xl md:text-2xl text-center text-bold">
          {name}
        </h2>
        <p className="font-thin text-sm md:text-md">
          <strong>Technologies used:</strong> {tech.slice(0, 30)}
          <label htmlFor="project" onClick={() => setModalProject(project)}>
            ..see details
          </label>
        </p>
        <div className="card- justify-center py-2">
          <label
            htmlFor="project"
            className="btn btn-primary btn-outline btn-sm w-7/12 rounded-none bg-neutral-100 px-5 py-2 border-slate-600 border  hover:shadow-[inset_20rem_0_0_0] hover:shadow-green-700  transition-[color,box-shadow]"
            onClick={() => setModalProject(project)}
          >
            Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default Project;
