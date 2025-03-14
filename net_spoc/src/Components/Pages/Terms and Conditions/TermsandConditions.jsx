import React, { useEffect } from 'react'
import Navbar from '../../LangingPage/Navbar'
import Hero from './Hero'
import Footer from '../../LangingPage/Footer'
function TermsandConditions() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
    }, []);
    return (
        <div className='bg-black'>
            <Navbar />
            <Hero />
            <Footer />

        </div>
    )
}

export default TermsandConditions
