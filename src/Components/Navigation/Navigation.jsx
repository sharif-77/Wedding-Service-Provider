import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";


const Navigation = () => {
  const {user,logOutUser}=useContext(AuthContext)

  const handleLogOut = ()=>{
    logOutUser()

  }

    return (
        <div>
            <nav className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div>
                    <img className="rounded-full w-24" src="https://i.ibb.co/Y3nmmB0/wedding-logo.jpg" alt="" />
                </div>
                <div className="grid grid-cols-3 md:flex gap-5  font-bold uppercase">
                    <NavLink to='/' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>Home</NavLink>
                    <NavLink to='/about' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>About </NavLink>
                    <NavLink to='/contact' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>Contact</NavLink>
                    <NavLink to='/gallery' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md `}>Gallery</NavLink>
                    
                   
                </div>

                <div className="flex gap-5  items-center">
                    <div className="uppercase font-bold">
                        {
                            user?.displayName&&user.displayName
                        }
                    </div>


                    <div>
                    <div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL?user.photoURL:"https://i.ibb.co/s2hVRQm/user.png"} />
                    </div>
                    </div>

                    </div>

                    <div>
                    {
                        user?<button onClick={handleLogOut}  className='hover:bg-[#220032] hover:text-white  py-2 px-5 rounded-md font-bold uppercase' >Logout</button>:<NavLink to='/login' className={({isActive})=>`${isActive&&`  bg-[#220032] text-white `} py-2 px-5 rounded-md font-bold uppercase` }>Login</NavLink>
                    }
                    </div>

            

                </div>
            </nav>
            
        </div>
    );
};

export default Navigation;