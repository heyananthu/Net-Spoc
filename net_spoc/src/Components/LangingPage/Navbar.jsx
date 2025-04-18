// import React, { useState } from "react";
// import Logo from "../../assets/Logo.png";
// import { BsArrowRight } from "react-icons/bs";
// import { Link } from "react-router-dom";
// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         // <nav className="bg-transparent w-full h-[5rem] p-3 relative z-20">
//         //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         //         {/* Logo */}
//         //         <div>
//         //             <img src={Logo} className="w-[12rem]" alt="Logo" />
//         //         </div>

//         //         {/* Mobile Menu Button */}
//         //         <button
//         //             onClick={() => setIsOpen(!isOpen)}
//         //             type="button"
//         //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
//         //             aria-controls="navbar-default"
//         //             aria-expanded={isOpen}
//         //         >
//         //             <span className="sr-only">Open main menu</span>
//         //             <svg
//         //                 className="w-6 h-6"
//         //                 aria-hidden="true"
//         //                 xmlns="http://www.w3.org/2000/svg"
//         //                 fill="none"
//         //                 viewBox="0 0 17 14"
//         //             >
//         //                 <path
//         //                     stroke="currentColor"
//         //                     strokeLinecap="round"
//         //                     strokeLinejoin="round"
//         //                     strokeWidth="2"
//         //                     d="M1 1h15M1 7h15M1 13h15"
//         //                 />
//         //             </svg>
//         //         </button>

//         //         {/* Navbar Links */}
//         //         <div
//         //             className={`absolute top-[6rem] left-0 w-full bg-black md:relative md:top-0 md:w-auto 
//         //                         md:flex md:bg-transparent transition-all duration-300 
//         //                         ${isOpen ? "block" : "hidden"}`}
//         //             id="navbar-default"
//         //         >
//         //             <ul className={`font-medium flex flex-col items-center font-inter p-4 md:p-0 mt-4 rounded-lg 
//         //         md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-white 
//         //         ${isOpen ? "bg-gradient-to-b from-transparent to-violet-500/40 space-y-12 py-6 w-full h-screen md:bg-none md:space-y-0 md:w-none " : ""}`}>

//         //                 <li>
//         //                     <a href="#" className="hover:text-gray-300 cursor-pointer" aria-current="page">
//         //                         Objectives
//         //                     </a>
//         //                 </li>
//         //                 <li>
//         //                     <a href="#" className="hover:text-gray-300 cursor-pointer">
//         //                         About Us
//         //                     </a>
//         //                 </li>
//         //                 <li
//         //                     className="flex justify-center items-center gap-2 px-4 py-1 rounded-xl 
//         //                                bg-gradient-to-b from-transparent to-violet-500/40 text-white 
//         //                                border-2 border-gray-300 hover:text-gray-300"
//         //                 >
//         //                     <a href="#" className="text-white cursor-pointer">Contact Us</a>
//         //                     <BsArrowRight />
//         //                 </li>
//         //             </ul>
//         //         </div>
//         //     </div>
//         // </nav>
//         <nav className="bg-transparent w-full h-[5rem] p-3 relative z-20">
//             <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
//                 {/* Logo */}
//                 <div>
//                     <Link to={'/'}>
//                         <img src={Logo} className="w-[12rem]" alt="Logo" /> </Link>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     type="button"
//                     className="inline-flex items-center p-2 w-10 h-10 justify-center text-white 
//                                rounded-lg md:hidden hover:bg-gray-700 z-50"
//                     aria-controls="navbar-default"
//                     aria-expanded={isOpen}
//                 >
//                     <span className="sr-only">Open main menu</span>
//                     <svg
//                         className="w-6 h-6"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 17 14"
//                     >
//                         <path
//                             stroke="currentColor"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M1 1h15M1 7h15M1 13h15"
//                         />
//                     </svg>
//                 </button>

//                 {/* Background Overlay for Mobile Menu */}
//                 {isOpen && (
//                     <div className="fixed inset-0 bg-violet-500/40 backdrop-blur-md z-10 md:hidden"></div>
//                 )}

//                 {/* Navbar Links */}
//                 <div
//                     className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white 
//                                 flex flex-col items-center justify-center z-20 transition-all duration-300 
//                                 md:relative md:top-0 md:w-auto md:h-auto md:bg-transparent md:flex md:flex-row 
//                                 ${isOpen ? "flex" : "hidden md:flex"}`}
//                     id="navbar-default"
//                 >
//                     <ul className="md:text-[14px] text-2xl font-normal flex flex-col items-center font-inter p-4 md:p-0 mt-4 
//                                    md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-white
//                                    space-y-20 md:space-y-0 md:bg-none">
//                         <li>
//                             <a href="#" className="hover:text-gray-300 cursor-pointer">
//                                 Objectives
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-gray-300 cursor-pointer">
//                                 About Us
//                             </a>
//                         </li>
//                         <Link to={'/contactus'}>
//                             <li
//                                 className="cursor-pointer flex justify-center items-center gap-2 px-6 py-2 rounded-xl 
//                                        bg-gradient-to-b from-transparent to-violet-500/50 
//                                        border-2  border-slate-400  hover:text-gray-300 text-[#F4F0FF] "
//                             >
//                                 Contact Us
//                                 <BsArrowRight className="text-[#F4F0FF]" />
//                             </li></Link>
//                         <Link to={'https://team.netspoc.com/login?redirect-to=http%3A%2F%2Fteam.netspoc.com%2Fapi%2Fmethod%2Ffrappe.integrations.oauth2.authorize%3Fresponse_type%3Dcode%26client_id%3Dc02690d625%26code_challenge_method%3Dplain%26code_challenge%3Dnetspoc%26redirect_uri%3Dhttps%3A%2F%2Fnetspoc.com%2Flogin#login'}>
//                             <li className="flex justify-center items-center gap-2 px-9 py-2 rounded-xl 
//                                        hover:bg-gradient-to-b from-transparent to-violet-500/50 
//                                        border-2  border-slate-400  hover:text-gray-300 cursor-pointer">Login</li></Link>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo.png";
import { BsArrowRight } from "react-icons/bs";

// Sidebar Component
function Sidebar({ isOpen, toggle }) {
    const sidebarVariants = {
        open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
        closed: { x: "-100%", opacity: 0.5, transition: { ease: "easeInOut", duration: 0.3 } },
    };

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 w-64 h-full bg-black text-white shadow-lg z-50 p-5"
        >
            <button onClick={toggle} className="absolute top-4 right-4 text-xl">
                ✖
            </button>
            <ul className="md:text-[14px] text-xl font-normal flex flex-col items-center font-inter p-4 md:p-0  mt-24
                                md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-white
                                    space-y-20 md:space-y-0 md:bg-none">
                {/* <li className="hover:text-gray-300 cursor-pointer"><Link to="#" onClick={toggle}>Objectives</Link></li> */}
                {/* <li ><Link to="#" onClick={toggle}>About Us</Link></li> */}
                <li>
                    <Link to="/contactus" className="flex justify-center items-center gap-2 px-2 py-2 rounded-xl bg-gradient-to-b from-transparent to-violet-500/50 border-2 border-slate-400 text-[#F4F0FF] hover:text-gray-300" onClick={toggle}>
                        Contact Us <BsArrowRight className="text-[#F4F0FF]" />
                    </Link>
                </li>
                <li>
                    <Link to="https://team.netspoc.com/login?redirect-to=http%3A%2F%2Fteam.netspoc.com%2Fapi%2Fmethod%2Ffrappe.integrations.oauth2.authorize%3Fresponse_type%3Dcode%26client_id%3Dc02690d625%26code_challenge_method%3Dplain%26code_challenge%3Dnetspoc%26redirect_uri%3Dhttps%3A%2F%2Fnetspoc.com%2Flogin#login" className="flex justify-center items-center gap-2 px-8 py-2 rounded-xl hover:border-2 border-slate-400 hover:bg-gradient-to-b from-transparent to-violet-500/50 hover:text-gray-300" onClick={toggle}>
                        Login
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}

// Navbar Component
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent w-full h-[5rem] p-3 relative z-20">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <div>
                    <Link to="/">
                        <img src={Logo} className="w-[12rem]" alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:flex md:items-center md:justify-end  space-x-8 text-white font-inter md:text-[14px] text-2xl font-normal">
                    {/* <Link to="#" className="hover:text-gray-300 cursor-pointer">Objectives</Link> */}
                    {/* <Link to="#" className="hover:text-gray-300 cursor-pointer">About Us</Link> */}
                    <Link to="/contactus" className="cursor-pointer flex justify-center items-center gap-2 px-6 py-2 rounded-xl 
                                       bg-gradient-to-b from-transparent to-violet-500/50 
                                       border-2  border-slate-400  hover:text-gray-300 text-[#F4F0FF] hover:scale-98 duration-200">
                        Contact Us <BsArrowRight className="text-[#F4F0FF]" />
                    </Link>
                    <Link to="https://team.netspoc.com/login?redirect-to=http%3A%2F%2Fteam.netspoc.com%2Fapi%2Fmethod%2Ffrappe.integrations.oauth2.authorize%3Fresponse_type%3Dcode%26client_id%3Dc02690d625%26code_challenge_method%3Dplain%26code_challenge%3Dnetspoc%26redirect_uri%3Dhttps%3A%2F%2Fnetspoc.com%2Flogin#login"
                        className="flex justify-center items-center gap-2 px-9 py-2 rounded-xl 
                    hover:bg-gradient-to-b from-transparent to-violet-500/50 
                    border-2  border-slate-400  hover:text-gray-300 cursor-pointer ">
                        Login
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white rounded-lg focus:outline-none z-50"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && <Sidebar isOpen={isOpen} toggle={() => setIsOpen(false)} />}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
