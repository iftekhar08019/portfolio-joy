import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      }
    ]
  }
]);

export default router;

