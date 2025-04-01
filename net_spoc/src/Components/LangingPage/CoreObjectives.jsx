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
            title: "Seamless Enterprise Connectivity",
            text: "We are committed to delivering high-speed, reliable network solutions tailored for businesses. Whether scaling operations or enhancing collaboration, count on us for swift and efficient connectivity that keeps your enterprise at the forefront of the digital world.",
            icon: icon1
        },
        {
            title: "Proactive Fault Detection for Enterprises",
            text: "Rather than responding to failures after they occur, our AI-driven monitoring system continuously analyzes network health, identifying early warning signs before they escalate. This proactive approach minimizes downtime, enhances operational efficiency, and ensures seamless enterprise performance.",
            icon: icon2
        },
        {
            title: "Enterprise-Grade Real-Time Monitoring",
            text: "Our AI-driven agents provide 24/7 network surveillance, proactively detecting potential issues and ensuring peak performance. By analyzing real-time data, they identify anomalies, mitigate risks, prevent downtime, and fortify enterprise security.",
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
                        Revolutionizing Network Fault Detection <br /> and Recovery with AI
                    </h1>
                    <p className="font-poppins text-gray-100 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
                        In today's fast-paced digital world, network reliability is more critical than ever. Enterprise networks face increasing complexity, making it difficult to detect and resolve faults before they escalate into major disruptions. Traditional troubleshooting methods are often reactive, leading to costly downtimes and service interruptions.(AI) is transforming network management by shifting from reactive to proactive fault detection and recovery. AI-driven monitoring systems continuously analyze real-time data, identifying anomalies and potential issues before they impact operations.
                    </p>
                    <button className="rounded-xl bg-gradient-to-b from-transparent to-violet-500/40 text-purple-100 px-6 py-2 border border-gray-500 hover:text-gray-300 transition-all hover:scale-98 duration-200" onClick={() => { navigate('/contactus') }}>
                        Book a Demo →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoreObjectives;
