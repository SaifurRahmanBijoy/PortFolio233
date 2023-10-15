import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import Blogs from "../pages/Blogs/Blogs";
import DisplayError from "../pages/DisplayError/DisplayError";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
    ],
  },
]);
export default router;
