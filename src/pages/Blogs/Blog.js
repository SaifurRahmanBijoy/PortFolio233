import React, { useEffect, useState } from "react";
import "./blog.css";

const Blog = ({ blog }) => {
  const { name, date, detail } = blog;
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-gray-800 text-white rounded-lg shadow-md py-6 px-10 text-justify ${
        showAnimation ? "animate-fade-in" : ""
      } my-10`}
    >
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-400 text-sm mb-4">{date}</p>
      <p className="text-gray-300 mb-6">{detail}</p>
    </div>
  );
};

export default Blog;
