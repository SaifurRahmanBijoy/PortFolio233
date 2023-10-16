import React from "react";
import "./style.css"

const ProjectModal = ({ modalProject, setModalProject }) => {
  const { name, tech, img1, img2, img3, img4, features, live, server, client } =
    modalProject;
  return (
    <div>
      <input type="checkbox" id="project" className="modal-toggle" />
      <div className="modal bg-slate-800">
        <div className="modal-box w-12/12 max-w-6xl lg:p-10">
          <label
            htmlFor="project"
            className="btn btn-sm btn-circle absolute right-5 lg:right-10 lg:top-10"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl md:text-3xl">{name}</h3>
          <h3 className="font-thin text-md mt-3">Screenshots:</h3>
          <div className="grid grid-cols-1 gap-3 mb-3">
            <img className="box" src={img1} alt="" />
            <img className="box" src={img2} alt="" />
            <img className="box" src={img3} alt="" />
            <img className="box" src={img4} alt="" />
          </div>
          <div className="my-3">
            <h3 className="font-thin text-md">Features:</h3>
            <ol>
              {features.map((f, i) => (
                <li key={i} data-aos="fade-down-left">
                  ◉ {f}
                </li>
              ))}
            </ol>
          </div>
          <div className="my-3">
            <h3 className="font-thin text-md">
              Technologies used in this project:
            </h3>
            <p className="mb-4" data-aos="fade-down">
              ◉ {tech}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <a
                className="btn btn-xs btn-outline btn-info rounded"
                href={live}
                target="_blank"
                rel="noreferrer"
              >
                Live Website
              </a>
              <a
                className="btn btn-xs btn-outline rounded"
                href={server}
                target="_blank"
                rel="noreferrer"
              >
                Server Site GitHub Link
              </a>
              <a
                className="btn btn-xs btn-outline btn-accent rounded"
                href={client}
                target="_blank"
                rel="noreferrer"
              >
                Client Site GitHub Link
              </a>
            </div>
          </div>
          <div className="modal-action">
            <label
              htmlFor="project"
              className="btn"
              onClick={() => setModalProject(null)}
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
