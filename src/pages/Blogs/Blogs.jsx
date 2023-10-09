import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
      fetch("/blogs.json")
        .then((res) => res.json())
        .then((data) => {
          setClients(data);
        });
    }, []);
    return (
        <div className="w-4/5 mx-auto py-20">

            <div className="">
                {
                    clients.map(client=><Blog key={client.id} client={client} />)
                }
            </div>
            
        </div>
    );
};

export default Blogs;