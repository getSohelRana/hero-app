import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Mainlayout from "../MainLayout/Mainlayout";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import Installation from "../Pages/Installation";
import AppDetails from "../Components/AppDetails";


const router = createBrowserRouter([
    {
        path : '/',
        Component : Mainlayout,
        errorElement : ErrorPage,
        hydrateFallbackElement : <p>Loading ...</p>,
        children : [
            { 
                index : true,
                Component : Home, 
            },
            {
                path : '/app',
                Component: App
            },
            {
                path : '/installation',
                Component : Installation,
            },
            {
                path : '/appDetails/:id',
                Component : AppDetails,
            }

        ]
    }
])
export default router;