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
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";


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
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://server-learn-with-toy.vercel.app/totalToys')
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path:'/toy-details/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params}) => fetch(`https://server-learn-with-toy.vercel.app/toys/${params.id}`)

      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
       path:'/updateToy/:id',
       element:<UpdateToy></UpdateToy>,
       loader : ({params}) => fetch(`https://server-learn-with-toy.vercel.app/toys/${params.id}`)
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
