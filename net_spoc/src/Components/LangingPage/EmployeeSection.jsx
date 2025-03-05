import React from 'react';
import image1 from '../../assets/empimg.png';
import bgimage from '../../assets/Emplyee-bg.png';

function EmployeeSection() {
    return (
        <div>
            <div className='relative bg-black min-h-screen max-w-screen flex flex-col items-center'>
                {/* ✅ Background Image - Positioned Right & Responsive */}
                <div
                    className="absolute right-0 top-0 lg:w-1/2 w-full h-full bg-cover bg-right bg-no-repeat opacity-30"
                    style={{ backgroundImage: `url(${bgimage})` }}
                ></div>

                {/* Main Content */}
                <div className='z-10 flex flex-col items-center text-center max-w-screen-xl px-4 lg:px-0'>
                    <img src={image1} className='mx-auto w-3/4 md:w-1/2 lg:w-1/3' alt="Employee" />
                    <h1 className='font-audiowide text-white text-4xl md:text-5xl'>
                        Used by thousands<br /> of employees!
                    </h1>
                </div>

                {/* Stats Section */}
                <div className='z-10 max-w-screen mx-auto my-24 px-4 '>
                    <div className='flex flex-col items-center  md:flex-row md:justify-center md:gap-x-40 sm:gap-x-16 gap-y-12'>
                        <StatBox number="10.2M+" text="ACTIVE ACCOUNTS" />
                        <StatBox number="300+" text="LIVE" />
                        <StatBox number="1000+" text="ONLINE USERS" />
                    </div>
                </div>
            </div>


        </div>
    );
}

// ✅ Reusable Stats Component (Now Responsive)
const StatBox = ({ number, text }) => (
    <div className='space-y-3'>
        <h1 className='font-audiowide text-3xl md:text-5xl  bg-gradient-to-r from-cerulean to-limegreen inline-block text-transparent bg-clip-text'>
            {number}
        </h1>
        <p className='text-white text-[10px] md:text-[10px]'>{text}</p>
    </div>
);

export default EmployeeSection;
