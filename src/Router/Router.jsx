import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage/MainPage";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);


export default router;