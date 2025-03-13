import React from 'react'
import india from '../../assets/india.png'
import waveleft from '../../assets/waveleft.png'
import waveright from '../../assets/waveright.png'
function HeroSection() {
    return (
        <div className='w-full h-full text-white space-y-6 '>
            <div className='text-center space-y-4 mt-12 md:mt-5 p-6'>
                <h1 class="font-audiowide font-normal text-2xl md:text-6xl text-center">Elevating Connectivity,<br /> Redefining Excellence.</h1>
                <p className='md:text-[13px] text-[10px] font-poppins font-light text-gray-100'>Experience the NetSpoc difference—seamless connectivity with reliability <br />and transparency. Stay confidently connected.</p>
            </div>
            <div>


                <div className='flex justify-center'>
                    <img src={india} className='md:w-[24rem] md:h-[28rem] w-[21rem] h-[25rem] translate-x-6 md:translate-0 md:-translate-y-12 ' />
                </div>

                {/* <div className='absolute left-0 top-0'>
                    <img src={waveleft} />
                </div> */}

            </div>



        </div>
    )
}

export default HeroSection
