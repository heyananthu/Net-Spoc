import React from "react";
import bgimage from "../../assets/serviceprovider-bgimg.png";
import Macbook from "../../assets/Macbook.png";

function Serviceprovider() {
    return (
        <div className="relative max-w-screen min-h-screen flex flex-col items-center justify-center text-white bg-black">

            {/* Background Image Wrapper */}
            <div
                className="absolute inset-0  max-w-[49rem] h-full bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${bgimage})` }}
            ></div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/50 z-[-1]"></div>

            {/* Content */}
            <div className="relative z-10  max-w-7xl px-4 md:px-8 py-16">
                <div className="grid grid-cols-1  md:grid-cols-2  gap-10 items-center">

                    {/* Left Side: Text */}
                    <div className="text-left max-w-lg space-y-4">
                        <h1 className="font-audiowide text-4xl md:text-5xl leading-tight">
                            The Largest <br /> Premier Internet <br /> Managed Service <br /> Provider.
                        </h1>
                        <p className="text-lg font-poppins text-gray-300">
                            Welcome to NetSpoc, your premier internet <br /> managed
                            service provider. At NetSpoc, we're <br /> committed to
                            delivering excellence.
                        </p>
                        <button className="mt-6 rounded-xl bg-gradient-to-b from-transparent to-violet-500/40 text-purple-100 px-6 py-2 border border-gray-500 hover:text-gray-300 transition">
                            Book a Demo →
                        </button>
                    </div>

                    {/* Right Side: MacBook Image */}
                    <div className="w-full max-w-lg">
                        <img src={Macbook} alt="Macbook" className="w-full h-auto shadow-2xl shadow-stone-800" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serviceprovider;
