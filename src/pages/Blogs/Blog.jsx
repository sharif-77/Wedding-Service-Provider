const Blog = ({client}) => {
  return (
    <div className="mb-10">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={client.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{client.name}</h2>
          <p>{client.story}</p>
        
        </div>
      </div>
    </div>
  );
};

export default Blog;
