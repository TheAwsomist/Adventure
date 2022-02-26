import { useEffect } from "react";
import Carousal from "./Carousal";
import "./Locations.css";
import Aos from "aos"
import "aos/dist/aos.css"

const Locations = () => {
    useEffect(() => {
        Aos.init({duration : 1000,delay:400});
    },[]);

  return (
    <>
      <div className="Title-Section">
        <h1 data-aos="fade-up" className="Title">So Where Will Your First Step Take You?</h1>
      </div>
      <div>
          <Carousal/>
      </div>
    </>
  );
};

export default Locations;
