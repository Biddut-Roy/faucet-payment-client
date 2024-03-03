import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage/MainPage";
import Home from "../component/Home/Home";
import Test from "../component/Test";
import Faq from "../component/FAQ/Faq";
import Eth from "../component/Home/TS-HIstory/Eth";
import TestHistory from "../component/Home/TS-HIstory/TestHistory";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            {
                path: "/",
                element: <Home />,
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
]);


export default router;