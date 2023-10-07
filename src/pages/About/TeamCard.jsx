
const TeamCard = ({person}) => {
    
    return (
        <div>
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img
          className="w-full min-h-[300px]"
            src={person.image}
            alt="image"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-2xl font-bold">{person.name}</h2>
          <p className="text-xl ">{person.designation}</p>
          
        </div>
      </div>
    </div>
    
    );
};

export default TeamCard;