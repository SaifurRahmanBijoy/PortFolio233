import React, { useEffect, useState } from "react";
import Project from "./Project";
import img3 from "../../Utilities/img/img3.jpg";
import resume from "../../Utilities/Saifur_Rahman_Resume_11-12-2022-20-38-47.pdf";
import ProjectModal from "./ProjectModal/ProjectModal";
import PrimaryButton from "../PrimaryButton";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [modalProject, setModalProject] = useState(null);
  const [projectsStats, setProjectsStats] = useState(true);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-blend-multiply"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="lg:min-h-screen flex items-center pl-6 min-h-screen bg-slate-900 bg-opacity-70">
          <div>
            <h1 className="text-2xl font-mono inline-block">
              I'm,
              <br />
              <span
                id="Saif"
                className="text-3xl md:text-5xl lg:text-6xl font-mono bg-gradient-to-l bg-clip-text text-transparent from-green-600 via-green-100 to-slate-50 animate-text"
              >
                Saifur Rahman 
              </span>
            </h1>
            <h3 className="font-thin text-2xl">Front-end Web Developer</h3>
            <div className="my-3">
              <PrimaryButton>
                <a href={resume} download="Resume.pdf">
                  Download Resume
                </a>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 mx-auto" data-aos="fade-in">
        <h2
          onClick={() => setProjectsStats(!projectsStats)}
          className="p-2 uppercase text-2xl my-5 font-serif bg-black rounded text-center w-7/12 mx-auto hover:cursor-pointer"
        >
          Projects
        </h2>
        {projectsStats && (
          <div className="grid grid-cols-1 w-11/12 mx-auto my-4">
            {projects?.map((project) => (
              <Project
                key={project.id}
                setModalProject={setModalProject}
                project={project}
              ></Project>
            ))}
          </div>
        )}
      </div>
      {modalProject && (
        <ProjectModal
          setModalProject={setModalProject}
          modalProject={modalProject}
        ></ProjectModal>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
