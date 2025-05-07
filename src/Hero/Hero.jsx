import React from "react";
import { useNavigate } from "react-router-dom";
import coin1 from "../assets/coin1.mp4";

const Hero = () => {
  const navigate = useNavigate();

  const goToForm = (e) => {
    e.preventDefault();
    navigate("/form");
  };

  return (
    <>
      <section className="relative min-h-[35rem] sm:min-h-[35rem] md:min-h-[38rem] lg:min-h-screen xl:min-h-screen 2xl:min-h-screen flex flex-col items-start justify-center text-left px-2 sm:px-4 md:px-6 ">
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

        <div className="container flex max-sm:items-center flex-col justify-center w-full max-sm:text-center text-left lg:ml-20 relative z-10 mb-4 sm:mb-5 md:mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-5 md:mb-6">
            Maximize Your Take-Home<br></br> Earnings With{" "}
            <span className="text-[#3754A1]">Data Tech</span>
          </h1>

          <div className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg text-white mb-6 sm:mb-8 md:mb-10 mx-inside mt-3 sm:mt-4 md:mt-5 space-y-2">
            <p className="font-semibold">
              Run your business globally, invoice clients seamlessly, enjoy UAE
              residency,
              <br /> and pay zero personal income tax—powered by
              innovative data tech.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-start gap-3 sm:gap-4 md:gap-6">
            <button className="w-full sm:w-auto text-[#3754A1] rounded-lg bg-white px-4 py-1 sm:px-3 md:px-4 lg:px-5 sm:py-0.5 md:py-1 lg:py-2 transition duration-300 text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 cursor-pointer">
              Explore as You Go
            </button>
            <button
              onClick={goToForm}
              className="w-full sm:w-auto text-white bg-transparent rounded-lg px-4 py-2 sm:px-3 md:px-4 lg:px-5 sm:py-2.5 md:py-3 lg:py-2 transition duration-300 flex items-center justify-start text-xs sm:text-sm md:text-base lg:text-lg border border-gray-300 cursor-pointer"
            >
              <span>Get Started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 ml-1 sm:ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
