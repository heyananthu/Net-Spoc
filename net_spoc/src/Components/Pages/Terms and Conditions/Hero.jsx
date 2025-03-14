import React from 'react'
import bgimage from '../../../assets/Coreobj-bg-img.png'

function Hero() {
    const data = [
        {
            title: "Service Description",
            text: "NetSpoc provides internet access services to residential and business customers. We offer a variety of plans with different speeds, data allowances, and features. You can find more information about our plans on our website."
        },
        {
            title: "Installation and Activation",
            text: "We will professionally install your internet service at your designated location. You are responsible for providing us with clear access to the installation point and ensuring a safe work environment for our technicians. Activation fees may apply."
        },
        {
            title: "Equipment",
            text: `We may provide you with equipment ("Equipment") to use with the Service. You are responsible for the safekeeping and proper use of the Equipment. You are also responsible for any damage to the Equipment beyond normal wear and tear. Equipment fees or deposits may apply.`
        },
        {
            title: "Service Availability and Performance",
            text: "We strive to provide a reliable and high-quality internet service. However, we cannot guarantee uninterrupted or error-free service. We are not responsible for outages caused by factors beyond our reasonable control, such as power failures, natural disasters, or acts of God."
        },
        {
            title: "Billing and Payment",
            text: "You agree to pay for the Service according to the chosen plan and any applicable fees. We accept various payment methods, which are outlined on our website. Late payment fees may apply."
        },
        {
            title: "Term and Termination",
            text: "These Terms will remain in effect until terminated by either you or us. You may terminate your Service at any time with prior notice. We may terminate your Service for violation of these Terms, non-payment, or other reasons."
        },
        {
            title: "Data Usage and Acceptable Use Policy",
            text: `We have a data usage policy that may apply to your plan. You can find more information about data usage on our website. We also have an Acceptable Use Policy ("AUP") that outlines prohibited activities on our network. You can find the AUP on our website.`
        },
        {
            title: "Limitation of Liability",
            text: "We are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Service. Our liability to you is limited to the amount you paid for the Service."
        },
        {
            title: "Disclaimer of Warranties",
            text: `The Service is provided "as is" and without warranties of any kind, express or implied. We disclaim all warranties, including warranties of merchantability, fitness for a particular purpose, and non-infringement.`
        },
        {
            title: "Changes to Terms and Conditions",
            text: "We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the revised Terms on our website. Your continued use of the Service after the posting of the revised Terms constitutes your agreement to the changes."
        },
        {
            title: "Governing Law",
            text: "These Terms will be governed by and construed in accordance with the laws of India."
        },
        {
            title: "Entire Agreement",
            text: "These Terms constitute the entire agreement between you and us regarding the use of the Service."
        },
        {
            title: "Severability",
            text: "If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck, and the remaining provisions shall remain in full force and effect."
        },
        {
            title: "Contact Us",
            text: "If you have any questions about these Terms, please contact us at +91-98803 22799."
        },
    ]
    return (
        <div className='bg-cover h-full bg-right' style={{
            backgroundImage: `url(${bgimage})`
        }}>
            <div className='bg-transparent shadow max-w-screen-xl mx-auto text-white mb-24 px-5'>
                <h1 className='font-audiowide text-4xl mt-12 text-center'>Terms and Conditions</h1>
                <div className='space-y-6'>
                    <div className='space-y-6'>
                        <h1 className='font-audiowide text-3xl mt-12 text-center md:text-left'>Welcome to NetSpoc!</h1>
                        <p className='font-poppins'>These Terms and Conditions govern your use of our internet service provided by NetSpoc. By using the Service, you agree to be bound by these Terms.</p>
                    </div>

                    <div className='mx-4'>
                        <ul className='list-disc space-y-6 font-poppins'>
                            {
                                data.map((item, index) =>
                                    <div key={index} className=''>
                                        <li className='font-semibold'>{item.title}</li>
                                        <p className='font-light'>{item.text}</p>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero
