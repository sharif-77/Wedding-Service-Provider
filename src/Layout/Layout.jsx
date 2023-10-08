import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto py-5">
        <Navigation />
      </div>
      <Outlet />
      <Footer />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Layout;
