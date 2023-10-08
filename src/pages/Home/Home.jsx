import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import Aos from "aos";
import 'aos/dist/aos.css'
import Clients from "../../Components/Clients/Clients";
import MarriageBenefits from "../../Components/MarriageBenefits/MarriageBenefits";

const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    return (
        <div className="py-10">
          <div >
          <Header/>
          </div>

           <div >
           <Services/>
           </div>
           <div>
            <MarriageBenefits/>
           </div>
           <div>
            <Clients/>
           </div>
            
        </div>
    );
};

export default Home;