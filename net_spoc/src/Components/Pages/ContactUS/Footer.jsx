import React from 'react';
import Logo from '../../../assets/Logo.png';
import fb from '../../../assets/fb.png';
import x from '../../../assets/x.png';
import instagram from '../../../assets/Instagram.png';
import linkedin from '../../../assets/linkedin.png';
import youtube from '../../../assets/youtube.png';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="bg-gradient-to-t from-[#023120] via-black to-black  w-full mx-auto px-10 font-poppins">
            <div className="max-w-screen-xl mx-auto grid items-center sm:place grid-cols-1  md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-7 space-y-12  py-3">
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
                <div className="text-white space-y-2  ">
                    <p className="text-gray-300 text-sm">Say hello to us</p>
                    <p className="text-white text-lg  underline">hello@netspoc.com</p>
                </div>

                {/* Right Section */}
                <div className="space-y-24 md:mt-[9rem]">
                    <ul className="text-white space-y-5 text-sm">
                        <li className='cursor-pointer'>About Us</li>
                        <div className='cursor-pointer'>
                            <Link to={'/privacypolicy'}><li>Privacy Policy</li></Link></div>
                        <li className='cusrsor-pointer'>Terms & Conditions</li>
                    </ul>

                    <div className="flex gap-5 mt-3 md:mt-0">
                        <img src={fb} alt="Facebook" className="w-7 h-7" />
                        <img src={x} alt="X (Twitter)" className="w-7 h-7" />
                        <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
                        <img src={instagram} alt="Instagram" className="w-7 h-7" />
                        <img src={youtube} alt="YouTube" className="w-7 h-7" />
                    </div>
                </div>

                <div className='text-white md:mt-12'>
                    <div>
                        <p className=''>4th Floor, Infant 28th Avenue<br />
                            No.3/1, Srinivagilu Main Road, Ejipura Junction <br />
                            Indiranagar - Koramangala Inner Ring Road<br />
                            District : Bengaluru, State : Karnataka<br />
                            PIN : 560047</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
