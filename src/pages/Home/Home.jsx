import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    return (
        <div className="py-10">
          <div >
          <Header/>
          </div>
           <div data-aos='fade-left'>
           <Services/>
           </div>
            
        </div>
    );
};

export default Home;