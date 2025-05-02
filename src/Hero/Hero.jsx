import React from 'react';
import cityimg from "../assets/hero.jpg";
import Background from "../assets/Background.png";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
    const goToForm = (e) => {
        e.preventDefault();
        navigate("/form");
    }
    return (
        <>
            <section
                className="relative bg-cover bg-center min-h-[20rem] sm:min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem] xl:min-h-[40rem] 2xl:min-h-[40rem] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 mt-2 sm:mt-4 md:mt-6 mb-12 sm:mb-20 md:mb-30"
            >
                <div className="container mx-auto w-full max-w-[90%] sm:max-w-[85%] md:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl relative z-10 mb-4 sm:mb-5 md:mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
                        Maximize Your Take-Home Earnings With <span className="text-[#3754A1]">Data Tech</span>
                    </h1>
                    <ul className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg text-[#3754A1] mb-6 sm:mb-8 md:mb-10 mx-inside mt-3 sm:mt-4 md:mt-5 list-none text-center space-y-2">
                        <li className="flex items-center justify-center">
                            <div className="flex items-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] ml-4 sm:ml-6 md:ml-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 mr-2 flex-shrink-0"
                                    fill="currentColor"
                                >
                                    <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                                </svg>
                                <span className="text-left">Operate globally without setting up a company</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-center">
                            <div className="flex items-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] ml-4 sm:ml-6 md:ml-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 mr-2 flex-shrink-0"
                                    fill="currentColor"
                                >
                                    <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                                </svg>
                                <span className="text-left">Legally invoice clients</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-center">
                            <div className="flex items-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] ml-4 sm:ml-6 md:ml-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 mr-2 flex-shrink-0"
                                    fill="currentColor"
                                >
                                    <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                                </svg>
                                <span className="text-left">Access UAE residency</span>
                            </div>
                        </li>
                        <li className="flex items-center justify-center">
                            <div className="flex items-center w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] ml-4 sm:ml-6 md:ml-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-green-500 mr-2 flex-shrink-0"
                                    fill="currentColor"
                                >
                                    <path d="M11.707,15.707C11.512,15.902,11.256,16,11,16s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0L11,13.586l8.35-8.35C17.523,3.251,14.911,2,12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10 c0-1.885-0.531-3.642-1.438-5.148L11.707,15.707z"></path>
                                </svg>
                                <span className="text-left">Pay zero personal income tax — all with Data Tech</span>
                            </div>
                        </li>
                    </ul>
                    <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6">
                        <a onClick={goToForm}
                            href="#"
                            className="bg-[#3754A1] text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full transition duration-300 flex items-center text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300"
                        >
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1 sm:ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-white bg-[#3754A1] px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300"
                        >
                            Explore as You Go
                        </a>
                    </div>
                </div>
            </section>
            <section className="relative h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 2xl:h-96">
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-700 opacity-90"
                    style={{
                        backgroundImage: `url(${Background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'overlay'
                    }}
                />
                <div className="absolute inset-0 flex justify-center items-end">
                    <img
                        src={cityimg}
                        alt="City Skyline"
                        className="w-[54rem] rounded-xl max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] 2xl:max-w-[70%] object-cover"
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16 2xl:h-20 bg-stone-800 opacity-50" />
            </section>
        </>
    );
};

export default Hero;