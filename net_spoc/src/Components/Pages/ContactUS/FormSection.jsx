import React, { useState } from 'react';
import { RxPerson } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
function FormSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "f87ed089-97ea-4b2d-9a7e-e53973dd44fd");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            toast.success('Message sent Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setName('');
            setEmail('');
            setPhone('');
            setService('');
            setMessage('');
        }
    };
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
            <form onSubmit={onSubmit}>
                <div className='flex justify-center'>
                    <div className='bg-black/30 backdrop-blur-md h-fit max-w-5xl w-full rounded-xl p-4 md:px-24 py-24 relative '>
                        <div className='w-full space-y-5'>
                            {/* Input Field */}
                            <div className='relative w-full'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    name="name"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    required
                                    className='p-4 py-4 border-1 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-2 focus:border-violet-600 pl-12'
                                />
                                <RxPerson className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                            </div>

                            <div className='relative w-full'>
                                <input
                                    type='text'
                                    placeholder='Email'
                                    name="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                    className='p-4 py-4 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                                />
                                <MdEmail className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                            </div>

                            <div className='relative w-full'>
                                <input
                                    type='text'
                                    placeholder='Phone'
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    required
                                    className='p-4 py-4 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                                />
                                <MdOutlineLocalPhone className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                            </div>

                            <div className='relative w-full'>
                                <input
                                    type='text'
                                    placeholder='Service You Need'
                                    name="service"
                                    value={service}
                                    onChange={(e) => { setService(e.target.value) }}
                                    required
                                    className='p-4 py-4 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                                />
                                <IoBookOutline className='absolute left-4 top-1/2 transform -translate-y-1/2 text-white size-6' />
                            </div>

                            <div className='relative w-full'>
                                <textarea
                                    type='text'
                                    placeholder='Any Note For Us'
                                    name="message"
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    required
                                    className='p-4 py-4 border-2 w-full  border-white  rounded-md bg-transparent text-white placeholder-gray-300 focus:border-violet-600 pl-12'
                                />
                                <PiNotePencil className='absolute left-4 top-1/3 transform -translate-y-1/2 text-white size-6' />
                            </div>

                            <button type="submit" className='cursor-pointer flex justify-center items-center gap-2 w-full h-[4rem] rounded-lg 
                                       bg-gradient-to-b from-transparent to-violet-500/50 
                                       border-2  border-slate-400  hover:text-gray-300 text-[#F4F0FF] font-poppins text-xl'>Make an Appointment</button>
                        </div>
                    </div>
                </div>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
}

export default FormSection;
