import React from 'react';
import { ChevronDown } from 'lucide-react';
import fpic1 from "../assets/doc.jpg"; // Update with the actual path to your vector image
import fpic2 from "../assets/atm.jpg"; // Update with the actual path to your vector image
import fpic3 from "../assets/skysc.jpg"; // Update with the actual path to your vector image
import tax from "../assets/tax.png"; // Update with the actual path to your vector image
import empire from "../assets/empire.png"; // Update with the actual path to your vector image
import hexagon from "../assets/hexagon.png"; // Update with the actual path to your vector image
import coin from "../assets/coin.png"; // Update with the actual path to your vector image
import { ArrowRight, Plus } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Comprehensive Health Insurance',
      description: "A business consultant provides expert advice and guidance to businesses on various aspects.",
      icon: coin,
      position: 'top',
    },
    {
      title: 'No Personal Income Tax',
      description: "Business consultants play a crucial role by offering expert advice and guidance to businesses.",
      icon: tax,
      position: 'bottom',
    },
    {
      title: 'Financial Independence',
      description: "Secure your financial future with strategic planning, tax optimization, and investment opportunities designed to maximize your wealth and business growth.",
      icon: hexagon,
      position: 'top',
    },
    {
      title: 'Exclusive Banking Services',
      description: "Through their deep understanding of industry trends and best practices, consultants empower organizations.",
      icon: empire,
      position: 'bottom',
    },
  ];

  return (
    <div className="max-w-[94rem] mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        {/* Left side - Text */}
        <div className="max-w-lg">
          <div className="inline-block bg-blue-100 text-indigo-900 px-4 py-1 rounded-full text-sm font-medium mb-4">
            ••• OUR FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 mb-2">
            From <span className="font-bold">Heavy Rates.</span>
            <br />
            to <span className="font-bold">Open Gates.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-indigo-700 font-medium">Join us.</p>
        </div>

        {/* Right side - Images */}
        <div className="relative w-full md:w-[500px] h-[150px] sm:h-[200px]">
          <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-md">
            <img src={fpic1} alt="City view" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-2 sm:top-4 left-24 sm:left-32 md:left-36 w-32 sm:w-40 md:w-48 h-20 sm:h-28 md:h-32 overflow-hidden rounded-lg shadow-md">
            <img src={fpic2} alt="Aerial city view" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 left-[12rem] sm:left-[16rem] md:left-[21rem] w-32 sm:w-40 md:w-48 h-40 sm:h-48 md:h-56 overflow-hidden rounded-lg shadow-md">
            <img src={fpic3} alt="Dubai skyline" className="w-full h-full object-cover" />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-[-10px] left-[10rem] sm:left-[14rem] md:left-[15rem] text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute bottom-[-10px] left-[10rem] sm:left-[14rem] md:left-[15rem] text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Grid - FIXED */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col h-full ${
              feature.position === 'top'
                ? 'lg:-mt-8 transform transition-transform duration-700 hover:-translate-y-2'
                : 'lg:mt-8 transform transition-transform duration-700 hover:-translate-y-2'
            }`}
          >
            <div className="text-gray-800 mb-4">
              <div className="bg-blue-50 p-2 sm:p-3 rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <img src={feature.icon} alt={feature.title} className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow">
              {feature.description}
            </p>
            <div className="flex justify-start mt-auto">
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                <Plus size={14} sm:size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;