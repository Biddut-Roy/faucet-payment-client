import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage/MainPage";
import Home from "../component/Home/Home";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);


export default router;