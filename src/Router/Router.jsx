import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage/MainPage";
import Home from "../component/Home/Home";
import Test from "../component/Test";




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
          path: "/test",
          element: <Test />,
        },
      ],
    },
  ]);


export default router;