import React from "react";
import img1 from "../../Utilities/img/img1.jpg";

const AboutMe = () => {
  return (
    <section
      className="text-gray-600 body-font"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="xl:w-5/12 lg:w-3/4 w-full mx-auto text-center">
          <p className="leading-relaxed text-sm md:text-xl text-justify lg:text-center mb-4">
            I hold a BSc in Computer Science and Engineering, offering a strong
            educational foundation. Proficient in diverse front-end technologies
            and MongoDB for back- end solutions, I'm ready to contribute
            effectively to dynamic teams, prioritizing excellence and
            innovation.
          </p>
          <p className="leading-relaxed text-sm md:text-xl text-justify lg:text-center">
            I know some technologies of web development such as HTML, CSS,
            JavaScript, React, Tailwind, Node JS, Express JS, MongoDB, and
            Stripe. I completed some awesome full-stack projects.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-200 font-medium title-font tracking-wider text-2xl">
            Saifur Rahman
          </h2>
          <p className="text-gray-500 text-sm">Front-end Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
