import React from 'react';
import { PiWhatsappLogo } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import bgimage from '../../../assets/Coreobj-bg-img.png';
import FormSection from './FormSection';

function SecondSection() {
    return (
        <div className=' bg-cover bg-right' style={{
            backgroundImage: `url(${bgimage})`
        }}>
            <div className='text-white h-[20rem] grid grid-cols-1 md:grid-cols-2 font-poppins'>
                <div className='flex justify-center items-center'>
                    <div className='flex items-center gap-x-5 '>
                        <div className='bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center'>
                            <PiWhatsappLogo className='size-8' />
                        </div>
                        <div>
                            <p>WhatsApp Number</p>
                            <p className='font-bold text-lg'>+91 968 669-7700</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center '>
                    <div className='flex items-center gap-x-5 '>
                        <div className=' bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center'>
                            <LuPhone className='size-8 ' />
                        </div>
                        <div>
                            <p>Contact Number</p>
                            <p className='font-bold text-lg'>+91 968 669-7700</p>
                        </div>
                    </div>
                </div>
            </div>
            <FormSection />
        </div>
    );
}

export default SecondSection;
