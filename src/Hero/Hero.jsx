import React from 'react';
import cityimg from "../assets/city-image.png"; // Update with the actual path to your vector image
import Background from "../assets/Background.png"; // Update with the actual path to your background image

const Hero = () => {
    return (
        <>
            <section
                className="relative bg-cover bg-center min-h-[28rem] md:min-h-[32rem] lg:min-h-[40rem] flex flex-col items-center justify-center text-center px-4 mt-12 mb-30"
            >
                <div className="container mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl relative z-10 mb-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                        Maximize Your Take-Home Earnings With <span className="text-[#3754A1]">Data Tech</span>
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#3754A1] mb-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mt-5">
                        Optimize your financial life, increase your earnings, and access global possibilities.
                    </p>
                    <div className="bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 inline-flex flex-col sm:flex-row shadow-md text-xs sm:text-sm md:text-base space-y-3 sm:space-y-0 sm:space-x-3 mb-8">
                        <div className="flex items-center text-[#7C828D]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-4 h-4 md:w-5 md:h-5 text-green-500"
                                fill="currentColor"
                            >
                                <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                            </svg>
                            <span><a href='' className='text-[#3754A1] underline'>10,000+</a> Reviews on</span>
                        </div>
                        <div className="flex items-center text-[#7C828D]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-4 h-4 md:w-5 md:h-5 text-green-500"
                                fill="currentColor"
                            >
                                <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                            </svg>
                            <span>Financial Freedom on the Go</span>
                        </div>
                        <div className="flex items-center text-[#7C828D]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-4 h-4 md:w-5 md:h-5 text-green-500"
                                fill="currentColor"
                            >
                                <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                            </svg>
                            <span>Trusted by <a href='' className='text-[#3754A1] underline'>100,000+</a> Company</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#"
                            className="bg-[#3754A1] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-[#2e468a] transition duration-300 flex items-center text-sm md:text-base"
                        >
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="bg-gray-200 text-gray-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-gray-300 transition duration-300 text-sm md:text-base"
                        >
                            Explore as You Go
                        </a>
                    </div>
                </div>
            </section>
            <section className="relative h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96">
                {/* Layered Background */}
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700 opacity-90"
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'overlay'
                    }}
                />
                
                {/* City Skyline */}
                <div className="absolute inset-0 flex justify-center items-end">
                    <img
                        src={cityimg}
                        alt="City Skyline"
                        className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[65%] object-cover"
                    />
                </div>
                
                {/* Foreground Rock/Stone Element */}
                <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 md:h-12 lg:h-16 bg-stone-800 opacity-50" />
            </section>
        </>
    );
};

export default Hero;