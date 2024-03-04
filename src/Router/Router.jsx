import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage/MainPage";
import Home from "../component/Home/Home";
import Test from "../component/Test";
import Faq from "../component/FAQ/Faq";
import Eth from "../component/Home/TS-HIstory/Eth";
import TestHistory from "../component/Home/TS-HIstory/TestHistory";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Error from "../component/Errorpage/Error";
import UserDetails from "../Layout/Dashboard/UserDetails/UserDetails";
import AdminRoute from "./AdminRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
                children: [
                    {
                        path: "/ETH",
                        element: <Eth />,
                    },
                    {
                        path: "/TestH",
                        element: <TestHistory />,
                    },
                ]

            },
            {
                path: "/FAQ",
                element: <Faq />,
            },
            {
                path: "/Test",
                element: <Test />,
            },
        ],
    },
    // ? start a Dashboard Route
    {
        path: "/Dashboard",
        element:<AdminRoute> <Dashboard /></AdminRoute>,
        errorElement: <Error />,
        children: [
            {
                path: "/Dashboard/User",
                element: <AdminRoute><UserDetails/></AdminRoute>,
            },
           
        ]
    }
]);


export default router;