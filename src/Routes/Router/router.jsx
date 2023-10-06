import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Login from "../../pages/Login/Login";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    }
])

export default router