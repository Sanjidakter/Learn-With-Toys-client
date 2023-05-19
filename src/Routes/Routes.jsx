import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import UpdateToyModal from "../pages/UpdateToyModal/UpdateToyModal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://server-learn-with-toy.vercel.app/totalToys')
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
         path:'/updateToys/:id',
         element: <UpdateToyModal></UpdateToyModal>,
         loader: ({params}) => fetch(`https://server-learn-with-toy.vercel.app/toys/${params.id}`)
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
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);

export default router;
