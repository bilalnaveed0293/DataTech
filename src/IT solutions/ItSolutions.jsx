import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import handshake from '../assets/handshake.png';
import tax from '../assets/tax.png';
import burj from '../assets/burjalarab.png';
import dollar from '../assets/dollar.png';

const ITSolutions = () => {
  const services = [
    {
      title: "Tax Optimization",
      description: "Save up to 48.4% of your income, maximizing long-term financial growth.",
      active: true,
      image: tax,
    },
    {
      title: "Salary Security",
      description: "UAE's Wage Protection System ensures timely, hassle-free monthly payouts.",
      active: false,
      image: handshake,
    },
    {
      title: "UAE Residency",
      description: "Gain legal status, tax-free income, and global market access for business growth.",
      active: false,
      image: burj,
    },
    {
      title: "Financial Freedom",
      description: "Enough resources to live life on your terms without financial stress.",
      active: false,
      image: dollar,
    },
    {
      title: "Tax Optimization",
      description: "Save up to 48.4% of your income, maximizing long-term financial growth.",
      active: false,
      image: tax,
    },
    {
      title: "Salary Security",
      description: "UAE's Wage Protection System ensures timely, hassle-free monthly payouts.",
      active: false,
      image: handshake,
    },
    {
      title: "UAE Residency",
      description: "Gain legal status, tax-free income, and global market access for business growth.",
      active: false,
      image: burj,
    },
    {
      title: "Financial Freedom",
      description: "Enough resources to live life on your terms without financial stress.",
      active: false,
      image: dollar,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'right' && currentIndex < services.length - 4) {
      setCurrentIndex(currentIndex + 4);
    } else if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header section */}
      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
            • WHAT WE OFFERS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-800">The Leading </span>
            <span className="text-gray-900 font-black">IT Solutions</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900 font-black">Company</span>
            <span className="text-gray-800"> For You</span>
          </h2>
        </div>

        {/* Scrollable container with navigation buttons */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#3754A1] cursor-pointer z-10 shadow-md hover:text-white" onClick={() => handleScroll('left')} disabled={currentIndex === 0}>
            <ChevronLeft size={24} />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#3754A1] cursor-pointer hover:text-white z-10 shadow-md" onClick={() => handleScroll('right')} disabled={currentIndex >= services.length - 4}>
            <ChevronRight size={24} />
          </button>

          {/* Scrollable card container */}
          <div className="overflow-x-hidden px-8">
            <div className="flex space-x-6 pb-8 px-4 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-center flex-1 bg-white p-8 rounded-lg shadow hover:shadow-md transition-shadow relative h-80 min-w-[25%]"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
                      <img
                        src={service.image}
                        alt={`${service.title} icon`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-4">{service.title}</h3>
                    <p className="text-gray-600 text-center text-sm mb-8">{service.description}</p>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <button className="flex items-center text-[#3754A1] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-gray-200 mt-auto"></div>
    </div>
  );
};

export default ITSolutions;