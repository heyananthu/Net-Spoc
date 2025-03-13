import React from 'react'
import bgimage1 from '../../../assets/Coreobj-bg-img.png'
import bgimage2 from '../../../assets/serviceprovider-bgimg.png'

function BackgroundComponent() {
    return (
        <div className='absolute inset-0 w-full h-full overflow-hidden -z-10'>
            <img
                src={bgimage1}
                alt="Background Image 1"
                className='absolute top-0 left-0 w-full h-full object-cover opacity-80'
            />
            <img
                src={bgimage2}
                alt="Background Image 2"
                className='absolute bottom-0 left-0 w-full h-full object-cover opacity-80'
            />
        </div>
    )
}

export default BackgroundComponent
