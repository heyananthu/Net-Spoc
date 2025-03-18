import React from 'react';
import bgimage from '../../assets/Coreobj-bg-img.png';
import icon1 from '../../assets/core-icon1.png';
import icon2 from '../../assets/core-icon2.png';
import icon3 from '../../assets/core-icon3.png';
import { useNavigate } from 'react-router-dom';
function CoreObjectives() {
    const navigate = useNavigate()
    const objectives = [
        {
            title: "Seamless Connectivity",
            text: "We're dedicated to providing you with reliable and high-speed internet connections. Whether you're a business or an individual, count on us to deliver new connections swiftly and efficiently, ensuring you're always connected to the digital world.",
            icon: icon1
        },
        {
            title: "Proactive Fault Detection",
            text: "Instead of reacting to failures after they occur, agentic AI continuously monitors systems to detect early warning signs. By identifying potential issues before they escalate, it enables proactive decision-making, reduces downtime, and ensures seamless performance.",
            icon: icon2
        },
        {
            title: "Real-time Monitoring",
            text: "AI agents actively monitor your network around the clock, detecting potential issues and ensuring optimal performance. By analyzing real-time data, they can identify anomalies, prevent downtime, and enhance overall security.",
            icon: icon3
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-white bg-cover bg-right" style={{
            backgroundImage: `url(${bgimage})`
        }}>
            
            {/* Background Image - Now Fully Responsive */}
            {/* <div
                className="absolute inset-0 w-full h-full bg-cover bg-right sm:bg-top bg-no-repeat"
                style={{
                    backgroundImage: `url(${bgimage})`
                }}
            ></div> */}

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 py-16 gap-y-12">
                
                {/* Heading */}
                <div className="text-center mb-10 mt-32">
                    <h1 className="font-audiowide text-5xl">Core Objectives</h1>
                </div>

                {/* Objectives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mt-16 px-4">
                    {objectives.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black/30 backdrop-blur-md border border-gray-500 shadow-lg rounded-lg p-6 w-full max-w-sm mx-auto transition-all duration-300 flex flex-col items-center space-y-6 min-h-[24rem]"
                        >
                            <img src={item.icon} className="size-[2rem] mt-6" alt={item.title} />
                            <h2 className="font-audiowide text-lg sm:text-xl">{item.title}</h2>
                            <p className="font-poppins font-normal text-sm mt-2 text-wrap text-gray-100">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Extra Section */}
                <div className="text-center text-white mt-32 space-y-10 px-4">
                    <h1 className="font-audiowide text-3xl sm:text-5xl">
                        Enhancing Network Fault Detection <br /> and Recovery with AI Agents
                    </h1>
                    <p className="font-poppins text-gray-100 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
                        We all know that network faults in telecom can be a nightmare—one little glitch and suddenly
                        everything goes haywire! With networks getting more complex, even small problems can snowball into
                        big issues. But what if there was a way to fix these problems instantly, with just the click of a
                        button? Enter AI-powered network fault detection and recovery—where Agentic AI doesn’t just find
                        the problems, it fixes them too, faster and smarter than ever before. In this post, we’re diving
                        into how this technology is changing the game and making telecom networks more reliable than ever!
                    </p>
                    <button className="rounded-xl bg-gradient-to-b from-transparent to-violet-500/40 text-purple-100 px-6 py-2 border border-gray-500 hover:text-gray-300 transition-all hover:scale-98 duration-200" onClick={()=>{navigate('/contactus')}}>
                        Book a Demo →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoreObjectives;
