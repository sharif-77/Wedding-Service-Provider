import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const About = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/team.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    console.log(data);





  return (
    <div className=" py-5">
      <div className="bg-[#220032]  min-h-32 p-5 text-white flex items-center">
        <p className="w-4/5 mx-auto text-3xl font-bold">Top Wedding Management Company | Wedding-service-provider Bangladesh</p>
        </div>

        <main className="w-4/5 mx-auto my-20 space-y-10">
            

            <div className="space-y-3 text-black">
                <h1 className="text-3xl font-bold text-black">Top Wedding Management Companies Bangladesh | Wedding Planner Bangladesh</h1>
                <p className="text-xl">
                Wedding-service-provider is considered Top Wedding Management Companies Bangladesh existing here in Bangladesh. We are a rapidly uprising company and have been striving through thick and thin in order to develop ourselves as the Event Event Planner Bangladesh and also ensure to reach the highest peak of perfection in every work and field we take on. Among several other Corporate planners out there in Bangladesh we keep on thriving to present ourselves at our best state and be known for our determination and efficiency.
                </p>

            </div>

            <div className="mt-5 text-black">
                <h1 className="uppercase text-3xl font-bold" >Meet Our Team</h1>
                <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mt-5">
                    {
                        data.map((person,i)=><TeamCard key={i} person={person}/>)
                    }
                </div>
            </div>
     

        </main>




    </div>
  );
};

export default About;
