import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import Aos from "aos";
import 'aos/dist/aos.css'
import Clients from "../../Components/Clients/Clients";

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
           <div  >
            <Clients/>
           </div>
            
        </div>
    );
};

export default Home;