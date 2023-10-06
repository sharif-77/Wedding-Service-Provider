import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto py-5">
                <Navigation/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;