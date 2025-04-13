import React from 'react'
import SoftwareLogo from '../assets/image 51.png'
import DotsTechLogo from '../assets/image 52.png'
import DensideLogo from '../assets/image 53.png'
import LotechLogo from '../assets/image 54.png'
import GlobalLogo from '../assets/image 55.png'
import DevModLogo from '../assets/image 56.png'
const Banner = () => {
    const logos = [
        { src: SoftwareLogo, alt: 'Software Solutions' },
        { src: DotsTechLogo, alt: 'Dots Tech' },
        { src: DensideLogo, alt: 'Denside' },
        { src: LotechLogo, alt: 'Lotech' },
        { src: GlobalLogo, alt: 'Global' },
        { src: DevModLogo, alt: 'DevMod.io' }
    ]

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-gray-600 text-base">
                        Trusted By of large and small businesses worldwide with Data Tech
                    </p>
                </div>
                
                <div className="relative">
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-gray-200"></div>
                    <div className="flex justify-center items-center space-x-10 relative z-10 bg-white px-8">
                        {logos.map((logo, index) => (
                            <img 
                                key={index} 
                                src={logo.src} 
                                alt={logo.alt} 
                                className="h-20 w-28"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
