import React from "react";
import BackgroundComponent from "./BackgroundComponent";
import Navbar from "./Components/LangingPage/Navbar";
import HeroSection from "./Components/LangingPage/HeroSection";

function NavHeader() {
    return (
        <div className="relative w-full h-screen">
            {/* Background Component (behind everything) */}
            <BackgroundComponent />

            {/* Content (Navbar & HeroSection on top of the background) */}
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default NavHeader;
