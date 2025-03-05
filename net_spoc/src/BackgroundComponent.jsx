import React from "react";
import leftimage from "./assets/Mainleft.png";
import rightimage from "./assets/Mainright.png";
import india from "./assets/india.png";

function BackgroundComponent() {
    return (
        <div className="absolute inset-0 w-full h-screen bg-black overflow-hidden pointer-events-none -z-10">
            <div className="relative flex justify-between h-full">
                {/* Left Image */}
                <img
                    src={leftimage}
                    className="w-[35%] max-w-[43rem] h-full object-cover"
                    alt="Left Background"
                />

                {/* Center Image (India) */}
                <div className="absolute inset-0 flex justify-center items-end">
                    <img
                        src={india}
                        className="w-[12rem] md:w-[15.4rem] max-h-full"
                        alt="India"
                    />
                </div>

                {/* Right Image */}
                <img
                    src={rightimage}
                    className="w-[35%] max-w-[43rem] h-full object-cover"
                    alt="Right Background"
                />
            </div>
        </div>
    );
}

export default BackgroundComponent;
