import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashBoardLayout from "../layout/DashBoardLayout";
import Home from "../pages/Home";
import AllFruits from "../pages/AllFruits";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/allFruits",
            element: <AllFruits/>,
          },
        ],
    },
    {
      path: "",
      element: <DashBoardLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "dashBoard",
            element: <DashBoard/>,
          }
        ],
    },
  ]);