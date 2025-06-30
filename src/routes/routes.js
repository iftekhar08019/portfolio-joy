import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Interest from "../pages/Interest";
import ContactForm from "../pages/Contact";

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
                path: "interest",
                Component: Interest,
            },
            {
                path: "contact",
                Component: ContactForm,
            }
        ]
    }
])

export default router;

