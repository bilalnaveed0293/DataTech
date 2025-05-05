import hexagon from "../assets/hexagon.png";
import tax from "../assets/tax.png";
import coin from "../assets/coin.png";
import empire from "../assets/empire.png";
import Etep from "../assets/ETEP.png";
import bms from "../assets/BMS.png";
import tdr from "../assets/TDR.png";
import gfa from "../assets/GFA.png";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WhyChooseDataTech = () => {
  const benefits = [
    {
      title: "Global Financial Access",
      description: "Access international banking and payment systems with ease.",
      image: gfa,
    },
    {
      title: "Business Made Simple",
      description: "Streamlined processes that remove complexity from global operations.",
      image: bms,
    },
    {
      title: "Tech-Driven Results",
      description: "Leverage cutting-edge technology for maximum efficiency and growth.",
      image: tdr,
    },
    {
      title: "End-to-End Partnership",
      description: "Complete support from initial setup through ongoing operations.",
      image: Etep,
    },
    {
      title: "Tax Optimization",
      description: "Save on taxes with strategic financial planning.",
      image: tax,
    },
    {
      title: "Financial Freedom",
      description: "Achieve financial independence with our tools.",
      image: coin,
    },
    {
      title: "Secure Operations",
      description: "Protect your business with top-tier security measures.",
      image: hexagon,
    },
    {
      title: "Data-Driven Growth",
      description: "Make informed decisions with advanced analytics.",
      image: empire,
    },
    {
      title: "Data-Driven Growth",
      description: "Make informed decisions with advanced analytics.",
      image: empire,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? 0 : prevIndex - itemsPerSlide
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerSlide >= benefits.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  // Display only the visible benefits based on currentIndex
  const visibleBenefits = benefits.slice(currentIndex, currentIndex + itemsPerSlide);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Data Tech?
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Discover the Benefits That Drive Real Growth
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                <div className="mb-4 h-16 w-16 flex items-center justify-center">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#3754A1] mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 bg-white p-2 cursor-pointer rounded-full shadow-md text-gray-700 hover:text-[#3754A1]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 -mr-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-[#3754A1]"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#3754A1] hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDataTech;