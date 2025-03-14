import React from 'react'
import bgimage from '../../../assets/Coreobj-bg-img.png'
function Hero() {
    return (
        <div className='bg-cover h-full bg-right' style={{
            backgroundImage: `url(${bgimage})`
        }}>
            <div className='bg-transparent shadow max-w-screen-xl mx-auto text-white mb-24 px-5'>
                <h1 className='font-audiowide text-4xl mt-12 text-center'>Privacy Policy</h1>
                <div className='space-y-6'>
                    <div className='space-y-6'>
                        <h1 className='font-audiowide text-3xl mt-12 text-center md:text-left'>Welcome to NetSpoc!</h1>
                        <p className='font-poppins font-light'>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our internet service.</p>
                    </div>
                    <div className='font-poppins space-y-6'>

                        <div>
                            <h1 className='font-semibold text-lg'>1. Information We Collect</h1>
                            <p className='font-light'>We collect several types of information to provide and improve our Service:</p>
                        </div>

                        <ul class="space-y-4 text-left ">
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Customer Information:</span>
                                </div>
                                <p className='mx-6 font-light'>We collect personal information such as your name, address, phone number, email address, and payment information when you subscribe to our Service.</p>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Service Usage Data:</span>
                                </div>
                                <p className='mx-6 font-light'>We collect personal information such as your name, address, phone number, email address, and payment information when you subscribe to our Service.</p>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Device Information:</span>
                                </div>
                                <p className='mx-6 font-light'>
                                    We collect information about the devices you use to access the Service, such as device type, operating system, IP address, and unique device identifiers.</p>
                            </li>
                        </ul>


                        <div>
                            <h1 className='font-semibold text-lg'>2. Use of Information</h1>
                            <p className='font-light'>We use the information we collect to:</p>
                        </div>

                        <ul class="space-y-4 text-left ">
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Provide and maintain the Service</span>
                                </div>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Bill you for the Service</span>
                                </div>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Send you important information about the Service, including service updates, billing information, and security notices</span>
                                </div>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Improve the Service and develop new features</span>
                                </div>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Personalize your experience with the Service</span>
                                </div>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Comply with legal requirements</span>
                                </div>
                            </li>
                        </ul>

                        <div>
                            <h1 className='font-semibold text-lg'>3. Sharing of Information</h1>
                            <p className='font-light'>We may share your information with third-party vendors who help us provide the Service. These vendors are obligated to protect your information and use it only for the purposes we specify. We may also disclose your information if required by law, to protect our rights, or to prevent fraud or harm.</p>
                        </div>

                        <div>
                            <h1 className='font-semibold text-lg'>4. Your Choices</h1>
                            <p className='font-light'>You have choices about your information:</p>
                        </div>

                        <ul class="space-y-4 text-left ">
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Access and Correction:</span>
                                </div>
                                <p className='mx-6 font-light'>You can access and update your personal information through your online account.</p>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Data Retention:</span>
                                </div>
                                <p className='mx-6 font-light'>We will retain your information for as long as necessary to provide the Service, comply with legal obligations, and resolve disputes.</p>
                            </li>
                            <li className=''>
                                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Marketing Communications:</span>
                                </div>
                                <p className='mx-6 font-light'>
                                    You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in those communications.</p>
                            </li>
                        </ul>
                        <div>
                            <h1 className='font-semibold text-lg'>5. Cookies and Other Tracking Technologies</h1>
                            <p className='font-light'>We may use cookies and other tracking technologies to collect information about your activity on our website and use of the Service. You can disable cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of the Service.</p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>6. Children's Privacy</h1>
                            <p className='font-light'>Our Service is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us.</p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>7. Security</h1>
                            <p className='font-light'>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security system is perfect, and we cannot guarantee the security of your information.</p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>8. Changes to the Privacy Policy</h1>
                            <p className='font-light'>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the revised Privacy Policy on our website. Your continued use of the Service after the posting of the revised Privacy Policy constitutes your agreement to the changes.</p>
                        </div>
                        <div>
                            <h1 className='font-semibold text-lg'>9. Contact Us</h1>
                            <p className='font-light'>If you have any questions about this Privacy Policy, please contact us at +91-98803 22799.</p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Hero
