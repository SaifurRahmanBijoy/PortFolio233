import React from "react";

const AboutMe = () => {
  return (
    <section
      name="About"
      className="text-gray-400 min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 bg-opacity-20"
    >
      <div className="container px-5 py-24 mx-auto flex flex-col items-center justify-center min-h-screen">
        <div className="w-9/12 md:w-3/4 mx-auto text-start">
          <h1 className="text-xl md:text-2xl lg:text-4xl inline border-b-4 border-gray-600">
            About
          </h1>
          <p className="leading-relaxed italic text-md md:text-xl lg:text-2xl text-start mt-2 mb-3">
            My name is Saifur Rahman
          </p>
          <p className="leading-relaxed text-sm md:text-xl text-start my-4">
            I hold a BSc in Computer Science and Engineering, offering a strong
            educational foundation. Proficient in diverse front-end technologies
            and MongoDB for back- end solutions, I'm ready to contribute
            effectively to dynamic teams, prioritizing excellence and
            innovation.
          </p>
          <p className="leading-relaxed text-sm md:text-xl text-start">
            I know some technologies of web development such as HTML, CSS,
            JavaScript, React, Tailwind, Node JS, Express JS, MongoDB, and
            Stripe. I completed some awesome full-stack projects.
          </p>

          {/* <h2 className="text-gray-200 font-medium title-font tracking-wider text-2xl">
            Saifur Rahman
          </h2>
          <p className="text-gray-500 text-sm">Front-end Web Developer</p> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
