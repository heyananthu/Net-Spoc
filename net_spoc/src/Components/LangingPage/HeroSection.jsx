import React from 'react'
import india from '../../assets/india.png'
import leftvector1 from '../../assets/left-vector1.png'
import leftvector2 from '../../assets/left-vector2.png'
import MapofIndia from '../../assets/Map of India.png'
function HeroSection() {
    return (
        <div className='w-full h-full text-white space-y-6 '>
            <div className='text-center space-y-4 mt-12 md:mt-5 p-6'>
                <h1 class="font-audiowide font-normal text-2xl md:text-6xl text-center">Elevating Connectivity,<br /> Redefining Excellence.</h1>
                <p className='md:text-[13px] text-[10px] font-poppins font-light text-gray-100'>Experience the NetSpoc difference—seamless connectivity with reliability <br />and transparency. Stay confidently connected.</p>
            </div>

            <div className='flex justify-center'>
                <img src={india} className='md:w-[24rem] md:h-[28rem] w-[21rem] h-[25rem] translate-x-6 md:translate-0 md:-translate-y-12 ' />
            </div>
            {/* <div>
                <img src={leftvector1} className='absolute top-[23rem]  w-[41rem]' />
                <img src={leftvector2} className='absolute top-[19rem] right-[55rem]  w-[43rem]' />
            </div> */}
            {/* <div>
                <img src={MapofIndia} className='w-[90rem] absolute top-[6rem] left-[7rem]' />

            </div> */}


        </div>
    )
}

export default HeroSection
