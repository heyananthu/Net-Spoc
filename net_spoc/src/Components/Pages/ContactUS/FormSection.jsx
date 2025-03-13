import React from 'react';
import { RxPerson } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
function FormSection() {
    return (
        <div className=' py-16 px-4'>
            {/* Title Section */}
            <div className='text-center mb-10'>
                <h1 className='font-audiowide text-3xl md:text-5xl text-white mb-4'>Make an Appointment</h1>
                <p className='font-poppins text-gray-200 max-w-2xl mx-auto'>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form.
                </p>
            </div>

            {/* Form Container */}
            <div className='flex justify-center'>
                <div className='bg-black/30 backdrop-blur-md h-fit max-w-5xl w-full rounded-xl p-4 py-24 relative '>
                    <div className='w-full space-y-5'>
                        {/* Input Field */}
                        <div className='relative w-full'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='p-4 py-5 border-1 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-2 focus:border-violet-600 pl-12'
                            />
                            <RxPerson className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                        </div>

                        <div className='relative w-full'>
                            <input
                                type='text'
                                placeholder='Email'
                                className='p-4 py-5 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                            />
                            <MdEmail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                        </div>

                        <div className='relative w-full'>
                            <input
                                type='text'
                                placeholder='Phone'
                                className='p-4 py-5 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                            />
                            <MdOutlineLocalPhone className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                        </div>

                        <div className='relative w-full'>
                            <input
                                type='text'
                                placeholder='Service You Need'
                                className='p-4 py-5 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                            />
                            <IoBookOutline className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                        </div>

                        <div className='relative w-full'>
                            <textarea
                                type='text'
                                placeholder='Any Note For Us'
                                className='p-4 py-5 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                            />
                            <PiNotePencil className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                        </div>

                        <button className='cursor-pointer flex justify-center items-center gap-2 w-full h-[4.5rem] rounded-xl 
                                       bg-gradient-to-b from-transparent to-violet-500/50 
                                       border-2  border-slate-400  hover:text-gray-300 text-[#F4F0FF] font-poppins text-xl'>Make an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSection;
