import { useEffect, useState } from 'react';

const Gallery = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/gallery.json')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    return (
        <div className='w-4/5 mx-auto'>

            <div>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mt-5">
                    {
                        data.map((item,i)=>    <div key={i}>
                        <div className="card  bg-base-100 shadow-xl ">
                          <figure>
                            <img
                            className="w-full min-h-[600px] max-h-[600px] "
                              src={item.image}
                              alt="image"
                            />
                          </figure>
                       
                        </div>
                      </div>)
                    }
                </div>
            </div>

            
        </div>
    );
};

export default Gallery;