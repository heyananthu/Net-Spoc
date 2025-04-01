import React from 'react'
import india from '../../assets/india.png'
import Waveleft from '../../assets/Mysvg'
function HeroSection() {
    return (
        <div className='w-full h-full text-white space-y-6 '>
            <div className='text-center space-y-4 mt-10 md:mt-5 p-6'>
                <h1 class="font-audiowide font-normal text-2xl md:text-6xl text-center">Seamless Connectivity,<br />Enterprise Excellence.</h1>
                <p className='md:text-[13px] text-[10px] font-poppins font-light text-gray-100'>Experience the NETSPOC advantage—enterprise-grade connectivity with <br />unmatched reliability and transparency. Stay confidently connected, always.</p>
            </div>
            <div>
                <div className='flex justify-center'>
                    <img src={india} className='md:w-[24rem] md:h-[28rem] w-[18rem] h-[20rem] translate-x-6 md:-translate-y-12 ' />
                </div>

                {/* <div className='absolute left-1/3 bg-red-300 top-10'>
                    <Waveleft width="100%" height="400px"/>
                </div> */}
            </div>
        </div>
    )
}

export default HeroSection
