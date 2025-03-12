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





        // <div className="bg-black absolute inset-0 w-full h-full overflow-hidden -z-10">
        //     <div className="relative flex justify-between h-full">
        //         {/* Left Image */}
        //         <div className="hidden md:block ">
        //             <img src={leftimage} className="w-full h-screen object-cover" alt="Left" />
        //         </div>
                
        //         {/* Center Content */}
        //         <div className='flex flex-col justify-center items-center text-white mt-24 space-y-6 w-full text-center p-6'>
        //             <h1 className="font-audiowide font-normal text-3xl md:text-5xl">
        //                 Elevating Connectivity,<br className="hidden md:block" /> Redefining Excellence.
        //             </h1>
        //             <p className='text-sm md:text-base font-extralight font-poppins text-gray-100'>
        //                 Experience the NetSpoc difference—seamless connectivity with reliability <br className="hidden md:block" />
        //                 and transparency. Stay confidently connected.
        //             </p>
        //             {/* India Map Image Below Paragraph */}
        //             <div className="flex justify-center items-center w-full mt-6">
        //                 <img src={india} className="w-[70%] sm:w-[50%] md:w-[50%] lg:w-[40%]" alt="India" />
        //             </div>
        //         </div>
                
        //         {/* Right Image */}
        //         <div className="hidden md:block">
        //             <img src={rightimage} className="w-full h-screen object-cover" alt="Right" />
        //         </div>
        //     </div>
        // </div>



    );
}

export default BackgroundComponent;
