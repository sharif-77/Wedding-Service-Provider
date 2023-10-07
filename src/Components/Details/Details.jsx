import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const {id}=useParams()
    const [data,setData]=useState({})

    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(allData=>{
            const findData=allData.find(data=>data.id==id)
            setData(findData)
        })

    },[])
    console.log(data);


  return (
    <div className="w-4/5 mx-auto my-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full min-h-[300px]"
            src={data.image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{data.name}</h2>
          <p  className="text-2xl">{data.description}</p>
          <p className="min-h-[100px] text-2xl">{data.details}</p>
         
          <div className="flex items-center justify-between">
            <div>
                <p className="font-bold text-xl"> ${data.price}</p>
            </div>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary font-bold">Add To Cart</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Details;