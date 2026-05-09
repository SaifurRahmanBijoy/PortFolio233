import React, { useEffect, useState, useRef } from "react";

import Project from "./Project";
import ProjectModal from "./ProjectModal/ProjectModal";
import PrimaryButton from "../PrimaryButton";
import Footer from "./Footer";
import AboutMe from "../AboutMe/AboutMe";
import Experience from "./Experience";
import Contact from "./Contact";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

import img3 from "../../Utilities/img/img3.jpg";
import img2 from "../../Utilities/img/img2.jpg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [modalProject, setModalProject] = useState(null);
  const [projectsStats, setProjectsStats] = useState(true);

  const mouse = useRef({ x: 0.5, y: 0.5 });
  const glow = useRef({ x: 0.5, y: 0.5 });
  const [renderPos, setRenderPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // 🌟 mouse + touch tracking
  useEffect(() => {
    const update = (x, y) => {
      mouse.current.x = x;
      mouse.current.y = y;
    };

    const onMouse = (e) => {
      update(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    };

    const onTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      update(t.clientX / window.innerWidth, t.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  // 🧠 smooth lag
  useEffect(() => {
    let id;

    const animate = () => {
      glow.current.x += (mouse.current.x - glow.current.x) * 0.08;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.08;

      setRenderPos({
        x: glow.current.x * 100,
        y: glow.current.y * 100,
      });

      id = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    // 🔥 FIX: restore full page background exactly like yours
    <div
      className="relative bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${img3})` }}
    >
      {/* 🌟 CURSOR GLOW */}
      <div
        className="fixed inset-0 pointer-events-none z-50 will-change-transform"
        style={{
          background: `radial-gradient(
            120px circle at ${renderPos.x}% ${renderPos.y}%,
            rgba(109, 40, 217, 0.18),
            rgba(6, 182, 212, 0.08),
            transparent 70%
          )`,
        }}
      />

      {/* DARK OVERLAY (same as before) */}
      <div className="relative z-10 bg-slate-900 bg-opacity-60">
        {/* HOME */}
        <section
          name="Home"
          className="relative min-h-screen flex items-center"
        >
          <div className="md:min-h-screen py-20 md:py-0 w-7/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* TEXT */}
            <div className="flex justify-center md:justify-start">
              <div className="flex flex-col space-y-5">
                <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs md:text-sm text-green-300">
                    Available for work
                  </p>
                </div>

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  I'm a <span className="text-[#6d28d9]">Full-stack</span> Web
                  Developer
                </h1>

                <p className="text-gray-400 text-sm md:text-base max-w-md hidden md:flex">
                  I build modern, responsive, and high-performance web
                  applications.
                </p>

                <PrimaryButton>
                  Projects
                  <span className="group-hover:translate-x-1 group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} />
                  </span>
                </PrimaryButton>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative group w-full sm:w-3/4 md:w-2/3 lg:w-[85%] overflow-hidden rounded-xl">
              <div className="rotating-border absolute -inset-2 rounded-3xl" />

              <img
                src={img2}
                alt=""
                className="relative z-10 w-full h-full object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <AboutMe />

        {/* PROJECTS */}
        <section
          name="Projects"
          className="pb-10 pt-20 w-7/12 mx-auto"
          data-aos="fade-in"
        >
          <h2
            onClick={() => setProjectsStats((p) => !p)}
            className="text-start text-white text-xl md:text-2xl lg:text-4xl border-b-4 inline border-gray-600"
          >
            Projects
          </h2>

          {projectsStats && (
            <div className="grid grid-cols-1">
              {projects?.map((p) => (
                <Project
                  key={p.id}
                  project={p}
                  setModalProject={setModalProject}
                />
              ))}
            </div>
          )}
        </section>

        {modalProject && (
          <ProjectModal
            modalProject={modalProject}
            setModalProject={setModalProject}
          />
        )}

        <div name="Experience" className="w-7/12 mx-auto">
          <Experience />
        </div>

        <div name="Contact" className="w-7/12 mx-auto">
          <Contact />
        </div>

        <div className="w-7/12 mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
