import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    console.log(data);
    return (
        <div className="w-4/5 mx-auto my-10 ">
            <p className="text-4xl text-center font-bold text-black py-10 uppercase">Our Services</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(data=><Service key={data.id} data={data}/>)
                }

            </div>
        </div>
    );
};

export default Services;