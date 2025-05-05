import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import hexagon from "../assets/hexagon.png";
import tax from "../assets/tax.png";
import coin from "../assets/coin.png";
import empire from "../assets/empire.png";

const WhyChooseDataTech = () => {
  const features = [
    {
      title: 'Comprehensive Health Insurance',
      description: "A business consultant provides expert advice and guidance to businesses on various aspects.",
      icon: hexagon,
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
      icon: coin,
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
    <div className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* WHAT WE OFFERS Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full px-4 py-1 inline-flex items-center">
            <span className="text-[#3754A1] text-sm font-medium">•• WHAT WE OFFERS</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gray-800">Professional </span>
            <span className="text-gray-900">UltraHD Video</span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="text-gray-900">Conferencing</span>
            <span className="text-gray-600 font-normal"> Platform</span>
          </h1>
        </div>

        {/* Feature Cards with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm p-6 flex flex-col ${
                feature.position === 'top' 
                  ? 'lg:-mt-8 transform transition-transform duration-700 hover:-translate-y-2' 
                  : 'lg:mt-8 transform transition-transform duration-700 hover:-translate-y-2'
              }`}
            >
              <div className="text-gray-800 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                  <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {feature.description}
              </p>
              <div className="flex justify-start">
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
          <button className="bg-[#3754A1] cursor-pointer text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium">
            Get Free Quote
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium">
            How We Work
          </button>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="w-full h-0.5 bg-[#3754A1] mt-16"></div>
    </div>
  );
};

export default WhyChooseDataTech;