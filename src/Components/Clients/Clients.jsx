import { useEffect, useState } from "react";

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("/clients.json")
      .then((res) => res.json())
      .then((data) => {
        setClients(data);
      });
  }, []);
  return (
    <div className="w-4/5 mx-auto mt-20 ">
      <div className="my-10">
        <p className="text-4xl font-bold uppercase">Our Happy Clients</p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 mt-5">
        {clients.map((client) => (
          <div key={client.id} data-aos='fade-left'>
            <div className="card  bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="w-full min-h-[600px] max-h-[600px]  "
                  src={client.image}
                  alt="image"
                />
              </figure>
              <div className="card-body text-center">
                <h2 className=" text-2xl font-bold">{client.couple_name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
