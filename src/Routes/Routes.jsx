import {
    createBrowserRouter,
    Outlet,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

  
 export const router = createBrowserRouter([
    {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path: 'menu',
            element: <Menu></Menu>
        }
    ]
    }
    ]);