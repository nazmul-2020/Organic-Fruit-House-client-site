import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import DashBoardLayout from "../layout/DashBoardLayout";
import Home from "../pages/Home";
import AllFruits from "../pages/AllFruits";
import DashBoard from "../pages/DashBoard";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUP from "../pages/SignUP";
import FruitDetails from "../component/Home/FruitDetails";
import ManageFruits from "../component/DashBord/ManageFruits";
import AddFruit from "../component/DashBord/AddFruit";
import EditFruit from "../component/DashBord/EditFruit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://organic-fruit-house-server-site.vercel.app/fruits"),
      },
      {
        path: "/allFruits",
        element: <AllFruits />,
        loader: () =>
          fetch("https://organic-fruit-house-server-site.vercel.app/fruits"),
      },
      {
        path: "/fruits/:id",
        element: <FruitDetails />,
        loader: ({ params }) =>
          fetch(
            `https://organic-fruit-house-server-site.vercel.app/fruits/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singUP",
        element: <SignUP />,
      },
    ],
  },
  {
    path: "",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "dashboard/manageFruits",
        element: <ManageFruits />,
      },
      {
        path: "dashboard/addFruit",
        element: <AddFruit />,
      },
      {
        path: "dashboard/editFruit/:id",
        element: <EditFruit />,
        loader: ({ params }) =>
          fetch(
            `https://organic-fruit-house-server-site.vercel.app/fruits/${params.id}`
          ),
      },
    ],
  },
]);
