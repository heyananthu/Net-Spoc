import React, { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import { MdEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoEyeOff, IoEye } from "react-icons/io5"; // Eye icon for password toggle
import bgimage from '../../../assets/Coreobj-bg-img.png';
function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="bg-gray-900 h-screen bg-cover bg-right" style={{
            backgroundImage: `url(${bgimage})`
        }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img src={Logo} alt="logo" />
                </a>
                <div className="w-full bg-transparent rounded-lg shadow border md:mt-0 sm:max-w-md  border-gray-700  py-12">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                        <form className="space-y-5">

                            {/* Email Input */}
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                    required
                                    className="p-4 py-3 border-2 w-full border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-600 pl-12"
                                />
                                <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 size-6" />
                            </div>

                            {/* Password Input */}
                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    required
                                    className="p-4 py-3 border-2 w-full border-gray-300 rounded-md bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-600 pl-12 pr-12"
                                />
                                <IoLockClosedOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 size-6" />

                                {/* Eye Button for Password Visibility Toggle */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 size-6"
                                >
                                    {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
                                </button>
                            </div>

                            {/* Forgot Password */}
                            <div className="flex items-center justify-end text-white">
                                <a href="#" className="text-sm font-medium text-primary-600 font-poppins hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>

                            {/* Sign In Button */}
                            <button type="submit" className="w-full cursor-pointer flex justify-center items-center gap-2  h-[3rem] rounded-lg 
                                       bg-gradient-to-b from-transparent to-violet-500/50 
                                       border-2  border-slate-400  hover:text-gray-300 text-[#F4F0FF] font-poppins text-xl">
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
