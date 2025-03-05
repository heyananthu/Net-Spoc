import React from 'react'
import india from '../../assets/india.png'
function HeroSection() {
    return (
        <div className='w-full h-full text-white space-y-6 '>
            <div className='text-center space-y-4 mt-12'>
                <h1 class="font-audiowide font-normal text-4xl md:text-6xl text-center ">Elevating Connectivity,<br /> Redefining Excellence.</h1>
                <p className='text-[13px] font-poppins text-gray-100'>Experience the NetSpoc difference—seamless connectivity with reliability <br />and transparency. Stay confidently connected.</p>
            </div>
            <div className='flex justify-center items-end'>
                <img src={india} className='md:size-[24rem] size-[18rem] translate-x-6 md:translate-0' />
            </div>


        </div>
    )
}

export default HeroSection
