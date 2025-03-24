import React from 'react';
import bgimage from '../../../assets/Coreobj-bg-img.png';
import contact from '../../../assets/Contact.jpg';

function Hero() {
    return (
        <div className="relative h-fit w-full bg-center bg-cover">
            {/* <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${bgimage})`
                }}
            ></div> */}

            <div className='mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto text-white text-center md:flex md:justify-between z-10'>
                <div>
                    <h1 className='font-audiowide text-5xl'>Contact Us</h1>
                </div>
                <div className='mt-2'>
                    <p className='font-poppins font-light'>Get in Touch with NETSPOC - Your Partner<br /> for internet Managed Services</p>
                </div>
            </div>

            {/* If you want to display the contact image on top of the background,
           ensure it's positioned correctly. If not, remove this section. */}
            <div>
                <img src={contact} className='w-full' />
            </div>
        </div>
    );
}

export default Hero;
