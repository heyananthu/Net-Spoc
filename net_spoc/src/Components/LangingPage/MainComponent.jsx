import React from "react";
import Navbar from "./Navbar";
import Mainleft from "../../assets/Mainleft.png";
import Mainright from "../../assets/Mainright.png";
import india from "../../assets/india.png";
import HeroSection from "./HeroSection";
import CoreObjectives from "./CoreObjectives";
import Serviceprovider from "./Serviceprovider";

function MainComponent() {
    return (
        <div>
            <div className="h-screen bg-black flex flex-col relative">
                {/* Background Wrapper */}
                <div className="absolute inset-0 flex h-full w-full flex-col md:flex-row">
                    {/* Left Background */}
                    <div
                        className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${Mainleft})` }}
                    ></div>

                    {/* Right Background */}
                    <div
                        className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${Mainright})` }}
                    ></div>
                </div>

                {/* Navbar */}
                <Navbar />

                {/* Hero Section */}
                <div className="relative flex-1 flex items-center justify-center h-full">
                    <HeroSection />
                </div>

                <div className="relative w-full flex justify-center mt-4 md:mt-8">
                    <img
                        src={india}
                        className="size-[16rem] md:size-[24rem] max-w-full relative z-10"
                        alt="Map of India"
                    />
                </div>
            </div>

            {/* Other Sections */}
            <CoreObjectives />
            <Serviceprovider />
        </div>
    );
}

export default MainComponent;
