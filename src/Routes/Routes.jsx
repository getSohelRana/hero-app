import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../MainLayout/Mainlayout";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import Installation from "../Pages/Installation";
import AppDetails from "../Components/AppDetails";
import PageNotFound from "../Pages/PageNotFound";
import AppErrorPage from "../Pages/AppErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Mainlayout,
        hydrateFallbackElement: <p>Loading ...</p>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/app',
                Component: App
            },
            {
                path: '/installation',
                Component: Installation,
            },
            {
                path: '/appDetails/:id',
                element: <AppDetails />,
    
            },
            {
                path: "*",
                Component: PageNotFound
            }

        ]
    }

])
export default router;