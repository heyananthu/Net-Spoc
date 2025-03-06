import React from "react";
import leftimage from "./assets/Mainleft.png";
import rightimage from "./assets/Mainright.png";
import india from "./assets/india.png";

function BackgroundComponent() {
    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden  -z-10">
            <div className="relative flex justify-between h-full">
                {/* Left Image */}
                <img
                    src={leftimage}
                    className="w-[35%] md:w-full md:max-w-full h-full object-cover"
                    alt="Left Background"
                />

                {/* Center Image (India) */}
                {/* <div className="absolute inset-0 flex justify-center items-end">
                    <img
                        src={india}
                        className="w-[22rem] fix translate-x-8 -translate-y-3 md:-translate-0 md:w-[23rem] max-h-full "
                        alt="India"
                    />
                </div> */}

                {/* Right Image */}
                <img
                    src={rightimage}
                    className="w-[35%] md:w-full max-w-full h-full object-cover"
                    alt="Right Background"
                />
            </div>
        </div>
    );
}

export default BackgroundComponent;
