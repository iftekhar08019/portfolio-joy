import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import Education from "../pages/Education";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: MainLayout,
    },
    {
        index: true,
        Component: MainLayout,
    }
    ,
    {
        path: "/education",
        Component: Education,
    }
])

export default router;
