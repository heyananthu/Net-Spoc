import React, { useEffect } from 'react'
import Navbar from '../../LangingPage/Navbar'
import Hero from './Hero'
import SecondSection from './SecondSection';
import FormSection from './FormSection';
import Footer from './Footer';

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to top when the component mounts
    }, []);
    return (
        <div className='bg-black'>
            <Navbar />
            <Hero />
            <SecondSection />
            {/* <FormSection /> */}
            <Footer />


        </div>
    )
}

export default ContactUs
