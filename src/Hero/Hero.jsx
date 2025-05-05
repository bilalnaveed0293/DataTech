import React from 'react';
import { useNavigate } from 'react-router-dom';
import coin1 from '../assets/coin1.mp4';

const Hero = () => {
    const navigate = useNavigate();

    const goToForm = (e) => {
        e.preventDefault();
        navigate("/form");
    }

    return (
        <>
            <section
                className="relative min-h-[20rem] sm:min-h-[35rem] md:min-h-[38rem] lg:min-h-[42rem] xl:min-h-[48rem] 2xl:min-h-[50rem] flex flex-col items-start justify-center text-left px-2 sm:px-4 md:px-6 mb-12 sm:mb-20 md:mb-30"
            >
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                    <video
                        className="absolute w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={coin1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Optional overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                <div className="container mx-12 sm:mx-14 md:mx-16 lg:mx-18 xl:mx-20 w-full max-w-[90%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl relative z-10 mb-4 sm:mb-5 md:mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-5 md:mb-6">
                        Maximize Your Take-Home Earnings With <span className="text-[#3754A1]">Data Tech</span>
                    </h1>

                    <div className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg text-white mb-6 sm:mb-8 md:mb-10 mx-inside mt-3 sm:mt-4 md:mt-5 space-y-2">
                        <p className='font-semibold'>Operate Globally Without Setting Up a Company
                           
                            Legally Invoice Clients
                            <br />
                            Access UAE Residency
                            Pay Zero Personal Income Tax — All with Data Tech</p></div>

                    <div className="flex flex-col sm:flex-row justify-start gap-3 sm:gap-4 md:gap-6">
                        <button
                            onClick={goToForm}
                            className="w-full sm:w-auto text-[#3754A1] bg-white px-4 py-2 sm:px-5 md:px-6 lg:px-8 sm:py-2.5 md:py-3 lg:py-4 transition duration-300 flex items-center justify-start text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 hover:bg-[#2a437d]"
                        >
                            <span>Get Started</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button
                            className="w-full sm:w-auto text-[#3754A1] bg-white px-4 py-2 sm:px-5 md:px-6 lg:px-8 sm:py-2.5 md:py-3 lg:py-4 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 hover:bg-[#2a437d]"
                        >
                            Explore as You Go
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;