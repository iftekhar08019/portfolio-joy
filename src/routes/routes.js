import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: MainLayout,
    },
    {
        index: true,
        Component: MainLayout,
    }
])

export default router;
