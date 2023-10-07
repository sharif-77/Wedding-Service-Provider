import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Details from "../../Components/Details/Details";
import Gallery from "../../pages/Gallery/Gallery";

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
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/details/:id',
                element:<Details/>
            },
            {
                path:'/gallery',
                element:<Gallery/>
            },
        ]
    }
])

export default router