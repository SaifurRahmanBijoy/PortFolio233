import React, { useEffect, useState } from "react";
import Project from "./Project";
import img3 from "../../Utilities/img/img3.jpg";
import img2 from "../../Utilities/img/img2.jpg";
import ProjectModal from "./ProjectModal/ProjectModal";
import PrimaryButton from "../PrimaryButton";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "./Experience";
import Contact from "./Contact";

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
        className="bg-fixed bg-cover bg-blend-multiply"
        style={{ backgroundImage: `url(${img3})` }}
        name="Home"
      >
        <div className="min-h-screen bg-cover bg-gradient-to-b from-black to bg-slate-900 bg-opacity-80">
          <div className="md:min-h-screen py-20 md:py-0 w-7/12 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
            <div className="flex justify-center items-center">
              <div className="my-5 md:my-0 flex flex-col justify-center">
                <h1 className="text-xl text-white sm:text-xl md:text-2xl lg:text-4xl inline-block">
                  I'm a Front-end Web Developer
                </h1>
                <p className="text-sm sm:text-md text-white lg:text-lg my-1 max-w-md">
                  I hold a BSc in Computer Science and Engineering, offering a
                  strong educational foundation. Proficient in diverse front-end
                  technologies and MongoDB for back- end solutions.
                </p>
                <div className="my-2 md:my-1">
                  <PrimaryButton>
                    Projects
                    <span className="group-hover:rotate-90 duration-300 ">
                      <MdOutlineKeyboardArrowRight size={25} />
                    </span>
                  </PrimaryButton>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="rounded-2xl mx-0 w-full md:my-0 md:mx-auto sm:w-3/4 md:w-2/3 hover:scale-125 duration-500"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <div>
        <AboutMe></AboutMe>
      </div>
      {/* Projects */}
      <div
        name="Projects"
        className="pb-10 pt-20 mx-auto w-8/12 lg:w-3/4"
        data-aos="fade-in"
      >
        <h2
          onClick={() => setProjectsStats(!projectsStats)}
          className="text-start text-white text-xl md:text-2xl lg:text-4xl border-b-4 inline border-gray-600"
        >
          Projects
        </h2>
        {projectsStats && (
          <div className="grid  lg:grid-cols-2 sm:px-">
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
      {/* Modal */}
      {modalProject && (
        <ProjectModal
          setModalProject={setModalProject}
          modalProject={modalProject}
        ></ProjectModal>
      )}
      {/* Experience */}
      <Experience></Experience>
      {/* Contact */}
      <div name="Contact">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
