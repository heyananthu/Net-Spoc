import React from 'react'
import bgimage from '../../../assets/Coreobj-bg-img.png'
function Hero() {
    return (
        <div className='bg-cover h-screen bg-top' style={{
            backgroundImage: `url(${bgimage})`
        }}>
            <div className=' max-w-7xl mx-auto text-white '>
                <h1 className='font-audiowide text-4xl mt-12 text-center'>Privacy Policy</h1>
                <div className='space-y-6'>
                    <h1 className='font-audiowide text-3xl mt-12'>Welcome to NetSpoc!</h1>
                    <p className='font-poppins'>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our internet service.</p>
                </div>
              
            </div>

        </div>
    )
}

export default Hero
