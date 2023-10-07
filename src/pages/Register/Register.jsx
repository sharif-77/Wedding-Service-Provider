
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);


  const handleRegister =e=>{
    e.preventDefault()
    const name=e.target.name.value;
    const photoUrl=e.target.url.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(name,photoUrl,email,password);




}

  return (
    <div className="m-5 ">
      <div className="shadow-xl p-10 md:w-3/5 lg:w-2/5 bg-[#220032] text-white m-auto mt-28 rounded ">
        <p className="text-center my-10 text-xl font-bold">
          Register 
        </p>
        <form onSubmit={handleRegister} className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name"> Your Name</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="url"> Photo Url</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="url"
              id="url"
              placeholder="Enter Your Photo Url"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email"> Email Address</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col gap-2 relative ">
            <label htmlFor="password"> Password</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type={seePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
            <span
              onClick={() => setSeePassword(!seePassword)}
              className="absolute top-10 right-2 text-black text-2xl"
            >
              {seePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <div className="flex flex-col my-3 ">
            <button
              className="bg-[#14c898f3] py-2 px-4 rounded-md  font-bold mt-5"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <p className="my-5 ">Already Have Account? please <Link className="ml-1 text-green-400" to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
