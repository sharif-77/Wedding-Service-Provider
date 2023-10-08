const MarriageBenefits = () => {
  return (
    <div
      className="w-full h-auto   bg-no-repeat  bg-cover"
      style={{ backgroundImage: `url('https://i.ibb.co/9pk1pzd/banner.jpg')` }}
    >
      <div className="bg-[#220032] h-full bg-opacity-90 ">
        <main className="w-4/5 mx-auto py-10 text-white  flex flex-col gap-5">
            <div className="mb-10">
                <p className="uppercase text-3xl font-bold">Benefits Of marriage</p>
            </div>

          <div className="collapse collapse-arrow bg-[#7d23a7]">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title text-xl font-medium">
            Emotional Support and Companionship
            </div>
            <div className="collapse-content">
              <p>Marriage provides a stable and intimate partnership, offering emotional support and companionship. Sharing life's joys and challenges with a spouse can promote mental well-being, reduce feelings of loneliness, and foster a strong sense of belonging.</p>
            </div>
          </div>


          <div className="collapse collapse-arrow bg-[#7d23a7]">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title text-xl font-medium">
            Legal and Financial Benefits
            </div>
            <div className="collapse-content">
              <p>Marriage often comes with legal and financial advantages, such as tax benefits, inheritance rights, and access to spousal health insurance coverage. These perks can lead to greater financial security and stability for couples.</p>
            </div>
          </div>


          <div className="collapse collapse-arrow bg-[#7d23a7]">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title text-xl font-medium">
            Social and Family Connections
            </div>
            <div className="collapse-content">
              <p>Marriage strengthens social bonds by connecting two families and fostering a network of friends and relatives. This expanded support system can be invaluable during difficult times and enhances a couple's overall sense of community and belonging.</p>
            </div>
          </div>


          <div className="collapse collapse-arrow bg-[#7d23a7]">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title text-xl font-medium">
            Health Benefits
            </div>
            <div className="collapse-content">
              <p>Research suggests that married individuals tend to enjoy better physical and mental health. Marriage can promote healthier lifestyles through mutual encouragement, reduce risky behaviors, and provide a safety net in times of illness.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-[#7d23a7]">
            <input type="radio" name="my-accordion-2"  />
            <div className="collapse-title text-xl font-medium">
            Long-Term Commitment and Partnership
            </div>
            <div className="collapse-content">
              <p>Marriage signifies a commitment to a long-term partnership. This commitment can provide a sense of purpose, stability, and a shared vision for the future, helping couples weather the storms of life and grow together over time.</p>
            </div>
          </div>

          

         
          
       
        </main>
      </div>
    </div>
  );
};

export default MarriageBenefits;
