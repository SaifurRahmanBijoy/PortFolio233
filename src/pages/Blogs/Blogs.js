import React, { useEffect, useState } from "react";
import Blog from "./Blog";
// import svg1 from "../../Utilities/img/svg1.svg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-11/12 mx-auto py-20 min-h-screen my-auto">
            {blogs?.map((blog) => (
              <Blog
                key={blog.id}
                blog={blog}
              ></Blog>
            ))}
          </div>
  );
};

export default Blogs;
