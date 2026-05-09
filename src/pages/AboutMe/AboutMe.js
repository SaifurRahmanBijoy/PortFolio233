import React, { useEffect, useRef, useState } from "react";

const skillsData = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Node JS", level: 70 },
  { name: "MongoDB", level: 65 },
];

const timelineData = [
  { year: "2019", title: "Started CSE", desc: "Began CSE journey" },
  { year: "2021", title: "Frontend Focus", desc: "React & UI dev" },
  { year: "2022", title: "Full Stack", desc: "Built MERN apps" },
];

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          skillsData.forEach((skill, i) => {
            setTimeout(() => {
              setProgress((prev) => {
                const updated = [...prev];
                updated[i] = skill.level;
                return updated;
              });
            }, i * 150);
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      name="About"
      className="min-h-screen w-7/12 mx-auto text-gray-300 py-24 flex items-center"
    >
      <div className="w-full">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl border-b border-[#6d28d9] inline-block mb-10">
          About
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div
            className={`transition-all duration-700 ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <p className="italic text-lg mb-3 text-gray-200">
              My name is Saifur Rahman
            </p>

            <p className="mb-3 text-sm md:text-base text-gray-400">
              BSc in CSE with strong frontend skills and MongoDB backend
              experience.
            </p>

            <p className="mb-6 text-sm md:text-base text-gray-400">
              HTML, CSS, JavaScript, React, Tailwind, Node, Express, MongoDB.
            </p>

            {/* Timeline */}
            <div className="relative border-l border-gray-700 pl-4 space-y-4">
              {timelineData.map((item, i) => (
                <div key={i} className="relative text-sm">
                  {/* <span className="absolute -left-[7px] top-[6px] w-2.5 h-2.5 bg-[#06b6d4] rounded-full mx-3"></span> */}

                  <p className="text-gray-300">
                    <span className="text-[#6d28d9] font-medium">
                      {item.year}
                    </span>{" "}
                    — {item.title}
                  </p>

                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`transition-all duration-700 ${
              visible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <h2 className="text-lg mb-6 text-gray-200">Skills</h2>

            <div className="space-y-5">
              {skillsData.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>{skill.name}</span>
                    <span className="text-gray-400">{progress[i]}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-800 rounded">
                    <div
                      className="h-2 rounded bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] transition-all duration-1000"
                      style={{ width: `${progress[i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
