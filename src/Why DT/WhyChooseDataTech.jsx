import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

const WhyChooseDataTech = () => {
  const features = [
    {
      title: 'Unified Communications',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 21L9 9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      position: 'top',
    },
    {
      title: 'Team Messenger',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M17 8H19C20.1046 8 21 8.89543 21 10V16C21 17.1046 20.1046 18 19 18H18.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="7.5" cy="12" r="1" fill="currentColor" />
          <circle cx="12.5" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      position: 'bottom',
    },
    {
      title: 'Telephony and PBX',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
      position: 'top',
    },
    {
      title: 'Smart Meeting',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 7L18.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M17 17L18.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 17L5.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 7L5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
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
                {feature.icon}
              </div>
              <h3 className="font-medium text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                Promptly solve urgent work issues! Create personal and group chats that allow for exchanging messages not only during conferences but also outside of them.
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