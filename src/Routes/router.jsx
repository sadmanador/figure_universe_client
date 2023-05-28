import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";

import AddAToys from "../pages/AddAToys/AddAToys";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Credential/Login/Login";
import Registration from "../pages/Credential/Registration/Registration";
import DetailToy from "../pages/DetailToy/DetailToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToys from "../pages/UpdateToys/UpdateToys";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () =>
          await fetch("https://figure-universe.vercel.app/figures"),
      },
      {
        path: "/all",
        element: <AllToys></AllToys>,
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateToys></UpdateToys>
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://figure-universe.vercel.app/figures/${params.id}`
          ),
      },
      {
        path: "/all/:id",
        element: (
          <PrivateRoutes>
            <DetailToy />
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://figure-universe.vercel.app/figures/${params.id}`
          ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoutes>
            <AddAToys></AddAToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);
