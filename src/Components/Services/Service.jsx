import { Link } from "react-router-dom";

const Service = ({data}) => {
  return (
    <div data-aos='fade-right'>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full min-h-[300px]"
            src={data.image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl min-h-[80px]">{data.name}</h2>
          <p className="min-h-[100px]">{data.description}</p>
          <div className="flex items-center justify-between">
            <div>
                <p className="font-bold text-xl"> ${data.price}</p>
            </div>
          <div className="card-actions justify-end">
            <Link to={`/details/${data.id}`} className="btn btn-primary font-bold">See Details</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
