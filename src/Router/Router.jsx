import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage/MainPage";
import Home from "../component/Home/Home";
import Test from "../component/Test";
import Faq from "../component/FAQ/Faq";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Home />,
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