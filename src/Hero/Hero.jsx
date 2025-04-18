import React from 'react';
import cityimg from "../assets/city-image.png"; // Update with the actual path to your vector image
import Background from "../assets/Background.png"; // Update with the actual path to your background image

const Hero = () => {
    return (
        <>
            <section
                className="relative bg-cover bg-center min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[40rem] 2xl:min-h-[48rem] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 mt-8 sm:mt-10 md:mt-12 mb-12 sm:mb-20 md:mb-30"
            >
                <div className="container mx-auto w-full max-w-[90%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl relative z-10 mb-4 sm:mb-5 md:mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                        Maximize Your Take-Home Earnings With <span className="text-[#3754A1]">Data Tech</span>
                    </h1>
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#3754A1] mb-6 sm:mb-8 md:mb-10 max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl mx-auto mt-3 sm:mt-4 md:mt-5">
                        Optimize your financial life, increase your earnings, and access global possibilities.
                    </p>
                    <div className="bg-white rounded-full px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 inline-flex flex-col sm:flex-row shadow-md text-[10px] sm:text-xs md:text-sm lg:text-base space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-3 lg:space-x-4 mb-6 sm:mb-8 md:mb-10">
                        <div className="flex items-center text-[#7C828D]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500"
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
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500"
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
                                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500"
                                fill="currentColor"
                            >
                                <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                            </svg>
                            <span>Trusted by <a href='' className='text-[#3754A1] underline'>100,000+</a> Company</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6">
                        <a
                            href="#"
                            className="hover:bg-[#3754A1] hover:text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full bg-transparent transition duration-300 flex items-center text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300"
                        >
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-900 bg-transparent  px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 hover:bg-[#3754A1] hover:text-white"
                        >
                            Explore as You Go
                        </a>
                    </div>
                </div>
            </section>
            <section className="relative h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-96">
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
                        className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%] object-cover"
                    />
                </div>
                
                {/* Foreground Rock/Stone Element */}
                <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 2xl:h-20 bg-stone-800 opacity-50" />
            </section>
        </>
    );
};

export default Hero;