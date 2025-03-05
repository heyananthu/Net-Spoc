import React from "react";
import leftimage from "./assets/Mainleft.png";
import rightimage from "./assets/Mainright.png";
import india from "./assets/india.png";

function BackgroundComponent() {
    return (
        <div className="absolute inset-0 w-full h-fit bg-black overflow-hidden pointer-events-none -z-10">
            <div className="relative  flex justify-between">
                {/* Left Image */}
                <img
                    src={leftimage}
                    className="w-[35%] max-w-[43rem] h-screen md:h-screen object-cover"
                    alt="Left Background"
                />

                {/* Center Image (India) */}
                <div className="flex justify-center items-end h-[30rem] pb-12">
                    <img
                        src={india}
                        className="w-[18rem] md:w-[23rem] absolute md:top-[18rem] top-[22rem] sm:left-[30%] left-[7rem] md:left-[38%] z-10"
                        alt="India"
                    />
                </div>

                {/* Right Image */}
                <img
                    src={rightimage}
                    className="md:block w-[35%] max-w-[43rem] h-screen md:h-screen object-cover"
                    alt="Right Background"
                />
            </div>
        </div>
    );
}

export default BackgroundComponent;
