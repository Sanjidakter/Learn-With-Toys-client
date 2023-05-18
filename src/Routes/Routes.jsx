import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import AddToys from '../pages/AddToys/AddToys';

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
           {
            path:'/',
            element:<Home></Home>
           },
           {
             path:'/addToys',
             element:<AddToys></AddToys>
           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/signup',
            element:<Signup></Signup>
           }

        ]
    }
])

export default router;