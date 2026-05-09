import React from "react";
import "./style.css";

const ProjectModal = ({ modalProject, setModalProject }) => {
  const { name, tech, img1, img2, img3, img4, features, live, server, client } =
    modalProject;

  return (
    <div>
      <input type="checkbox" id="project" className="modal-toggle" />

      {/* BACKDROP with smooth fade */}
      <div className="modal bg-slate-900/80 backdrop-blur-md transition-opacity duration-300 ease-in-out">
        {/* MODAL BOX with smooth pop-in */}
        <div className="modal-box w-12/12 max-w-6xl lg:p-10 animate-modalPop">
          <label
            htmlFor="project"
            className="btn btn-sm btn-circle absolute right-5 lg:right-10 lg:top-10"
            onClick={() => setModalProject(null)}
          >
            ✕
          </label>

          <h3 className="font-bold text-2xl md:text-3xl">{name}</h3>

          {/* SCREENSHOTS */}
          <h3 className="font-thin text-md mt-5 mb-2">Screenshots:</h3>

          <div className="flex flex-col gap-4">
            {[img1, img2, img3, img4].map((img, i) => (
              <div key={i} className="overflow- rounded-sm">
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover rounded-sm 
                             transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="my-5">
            <h3 className="font-thin text-md mb-2">Features:</h3>
            <ol className="space-y-1">
              {features.map((f, i) => (
                <li key={i} className="text-sm opacity-90">
                  ◉ {f}
                </li>
              ))}
            </ol>
          </div>

          {/* TECH */}
          <div className="my-5">
            <h3 className="font-thin text-md mb-2">
              Technologies used in this project:
            </h3>

            {/* TECH PILLS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.split(",").map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full 
                             bg-gradient-to-r from-purple-600 to-cyan-500 
                             text-white shadow-md hover:scale-105 transition"
                >
                  {t.trim()}
                </span>
              ))}
            </div>

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

          {/* CLOSE */}
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
