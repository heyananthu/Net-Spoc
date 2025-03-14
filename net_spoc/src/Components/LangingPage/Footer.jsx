import React from 'react';
import Logo from '../../assets/Logo.png';
import fb from '../../assets/fb.png';
import x from '../../assets/x.png';
import instagram from '../../assets/Instagram.png';
import linkedin from '../../assets/linkedin.png';
import youtube from '../../assets/youtube.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-gradient-to-t from-[#023120] via-black to-black  w-full mx-auto px-10 font-poppins">
            <div className="max-w-7xl mx-auto grid items-center grid-cols-1 space-y-12 md:flex md:flex-row md:justify-between md:items-center py-3">
                {/* Left Section */}
                <div className="text-white space-y-24">
                    <div>
                        <Link to={'/'}>
                            <img src={Logo} alt="Logo" className="w-52" /></Link></div>
                    <h1 className="font-audiowide text-6xl text-white">
                        Connect <br /> with us
                    </h1>
                    <p className='text-nowrap'>©2024 Netspoc, Inc. All rights reserved</p>
                </div>

                {/* Middle Section */}
                <div className="text-white space-y-2 md:my-12">
                    <p className="text-white text-sm font-light">Say hello to us</p>
                    <p className="text-white text-lg  underline">hello@netspoc.com</p>
                </div>

                {/* Right Section */}
                <div className="space-y-28 md:mt-16">
                    <ul className="text-white space-y-5 text-sm">
                        <li className='cursor-pointer'>About Us</li>
                        <div className='cursor-pointer'>
                            <Link to={'/privacypolicy'}><li>Privacy Policy</li></Link>
                        </div>
                        <div className='cursor-pointer'>
                            <Link to={'/Terms and Conditions'}>
                                <li>Terms & Conditions</li></Link>
                        </div>
                        <div className='cursor-pointer'>
                            <Link to={'/refund & cancellation'}>
                                <li>Refund & Cancellation</li></Link>
                        </div>
                    </ul>

                    <div className="flex gap-5 md:justify-end ">
                        <img src={fb} alt="Facebook" className="w-7 h-7" />
                        <img src={x} alt="X (Twitter)" className="w-7 h-7" />
                        <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
                        <img src={instagram} alt="Instagram" className="w-7 h-7" />
                        <img src={youtube} alt="YouTube" className="w-7 h-7" />
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Footer;
