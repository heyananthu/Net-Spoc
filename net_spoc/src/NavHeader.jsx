import React from "react";
import BackgroundComponent from "./BackgroundComponent";
import Navbar from "./Components/LangingPage/Navbar";
import HeroSection from "./Components/LangingPage/HeroSection";

function NavHeader() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Component (absolute so it scrolls with page) */}
            <BackgroundComponent />

            {/* Foreground Components */}
            <div className="relative z-10">
                <Navbar />
                <HeroSection />
            </div>
        </div>
    );
}

export default NavHeader;
