import React,{useEffect} from "react";
import Navbar from "./Navbar";
import Mainleft from "../../assets/Mainleft.png";
import Mainright from "../../assets/Mainright.png";
import india from "../../assets/india.png";
import HeroSection from "./HeroSection";
import CoreObjectives from "./CoreObjectives";
import Serviceprovider from "./Serviceprovider";
import EmployeeSection from "./EmployeeSection";
import NavHeader from "../../NavHeader";
import Footer from "./Footer";

function MainComponent() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
      }, []);
    return (
        <div>
            <NavHeader />
            <CoreObjectives />
            <Serviceprovider />
            <EmployeeSection />
            <Footer />
        </div>
    );
}

export default MainComponent;
