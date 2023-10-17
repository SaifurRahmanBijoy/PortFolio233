import React from "react";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import github from "../../assets/github.png";
import tailwind from "../../assets/tailwind.png";
import bootstrap from "../../assets/bootstrap.png";
import daisy from "../../assets/daisy.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: daisy,
      title: "daisyUI",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b pt-10 from-gray-800 to-black min-h-screen"
    >
      <div className="py-10 w-9/12 lg:w-3/4 max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white">
        <div>
          <p className="text-start text-xl md:text-2xl lg:text-4xl border-b-4 inline border-gray-600">
            Experience
          </p>
          {/* <p className="py-6">These are the technologies I've worked with</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px- sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
