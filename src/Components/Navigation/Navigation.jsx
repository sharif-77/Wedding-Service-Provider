import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <div>
            <nav className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div>
                    <img className="rounded-full w-24" src="https://i.ibb.co/Y3nmmB0/wedding-logo.jpg" alt="" />
                </div>
                <div className="flex gap-5 lg:gap-10 font-bold">
                    <NavLink to='/' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>Home</NavLink>
                    <NavLink to='/about' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>About</NavLink>
                    <NavLink to='/contact' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>Contact</NavLink>
                    <NavLink to='/login' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>Login</NavLink>
                   
                </div>
            </nav>
            
        </div>
    );
};

export default Navigation;