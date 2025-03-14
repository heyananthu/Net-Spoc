import React from 'react'
import bgimage from '../../../assets/Coreobj-bg-img.png'

function Hero() {
    const refund = [
        {
            title: "Service Disruption:",
            text: "In the event of a significant service disruption caused by our company, you may be eligible for a prorated refund based on the duration of the disruption."
        },
        {
            title: "Cancellation within Trial Period:",
            text: "If you cancel your subscription within the trial period (if applicable), you will receive a full refund."
        },
        {
            title: "Unused Services:",
            text: "If you cancel your subscription and have unused services, you may be eligible for a refund of the unused portion of your subscription fee."
        },
        {
            title: "Refund Requests:",
            text: "All refund requests must be submitted within 7 days of the service disruption or cancellation. Requests made after this period may not be eligible for a refund."
        },
        {
            title: "Refund Process:",
            text: "Refunds will be processed within 7 days of approval and will be issued via the original method of payment."
        },

    ]

    const cancellation = [
        {
            title: "Cancellation Requests:",
            text: "Cancellation requests must be made by the account holder or an authorized representative."
        },
        {
            title: "Cancellation Period:",
            text: "Your cancellation will take effect at the end of your current billing cycle. You will have access to the services until the end of the billing cycle."
        },
        {
            title: "Automatic Renewal:",
            text: "Subscriptions are set to automatically renew at the end of each billing cycle. To avoid being charged for the next billing cycle, please ensure that you cancel your subscription before the renewal date."
        },
        {
            title: "Equipment Return:",
            text: "If you have leased or rented equipment from us, you may be required to return the equipment in good condition upon cancellation. Failure to return the equipment may result in additional fees."
        },
        {
            title: "Outstanding Balances:",
            text: "Cancellation does not relieve you of any outstanding balances owed to the company. All outstanding balances must be settled before cancellation is finalized."
        },
    ]
    return (
        <div className='bg-cover h-full bg-right' style={{
            backgroundImage: `url(${bgimage})`
        }}>
            <div className='bg-transparent shadow max-w-screen-xl mx-auto text-white mb-24 px-5'>
                <h1 className='font-audiowide text-4xl mt-12 text-center'>Refund & Cancellation Policy</h1>
                <div className='space-y-6'>
                    <div className='space-y-6'>
                        <h1 className='font-audiowide text-3xl mt-12 text-center md:text-left'>Refund Policy</h1>
                        <p className='font-poppins'>We strive to provide excellent service to all our customers. If you are not completely satisfied with our services, you may be eligible for a refund subject to the following conditions:</p>
                    </div>
                    <ul className='list-disc space-y-6 font-poppins mx-4'>
                        {refund.map((items, index) =>
                            <div key={index}>
                                <li className='font-semibold'>{items.title}</li>
                                <p className='font-light'>{items.text}</p>
                            </div>
                        )}
                    </ul>

                    <div className='space-y-6'>
                        <h1 className='font-audiowide text-3xl mt-12 text-center md:text-left'>Cancellation Policy</h1>
                        <p className='font-poppins'>You may cancel your subscription at any time by contacting our customer support team. Please note the following:</p>
                    </div>
                    <ul className='list-disc space-y-6 font-poppins mx-4'>
                        {cancellation.map((items, index) =>
                            <div key={index}>
                                <li className='font-semibold'>{items.title}</li>
                                <p className='font-light'>{items.text}</p>
                            </div>
                        )}
                    </ul>
                    <p className='font-light font-poppins'>Please note that this is a generic policy and may need to be tailored to fit the specific terms and conditions of your internet telecom company. Additionally, local laws and regulations may impact the applicability of certain provisions. It's recommended to seek legal advice when drafting or modifying your refund and cancellation policy.</p>

                </div>
            </div>



        </div>
    )
}

export default Hero
