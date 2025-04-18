import React from 'react';
import cityscapeImage from '../assets/cityscape.png'; // Adjust the path to your image
import { ChartBarIcon, HandshakeIcon } from 'lucide-react';
import { useState } from 'react';

const ValueStrategy = () => {
  const [activeItem, setActiveItem] = useState('Business Unit Strategy');
  
  const menuItems = [
    'Financial Consultancy',
    'Business Unit Strategy',
    'Solicitory Consultancy',
    'HR Consultancy',
    'Strategy Consultancy',
    'Start Ups'
  ];

  return (
    <div className=" bg-blue-50 flex flex-col items-center pt-8 pb-20 px-4" style={{
      backgroundImage: 'linear-gradient(rgba(235, 241, 252, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(235, 241, 252, 0.8) 1px, transparent 1px)',
      backgroundSize: '35px 35px'
    }}>
      {/* Header */}
      <div className="text-center max-w-4xl mb-16">
        <h1 className="text-5xl font-light text-gray-800 mb-2">
          Building <span className="font-bold">enduring value</span>
        </h1>
        <h1 className="text-5xl font-light text-gray-800">
          through <span className="font-bold">bold</span> strategies
        </h1>
      </div>

      {/* Main content */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 px-4 ">
        {/* Menu section */}
        <div className="md:w-1/3">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                className={`p-2 text-left rounded transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  activeItem === item 
                    ? 'bg-white text-gray-800 hover:bg-[#3754A1] hover:text-white' 
                    : 'bg-white text-gray-800 hover:bg-[#3754A1] hover:text-white'
                }`}
                onClick={() => setActiveItem(item)}
              >
                <span>{item}</span>
                {activeItem === item && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 5L21 12L14 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right section with image and premium content side by side */}
        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image column */}
              <div className="md:w-1/2">
                <img 
                  src={cityscapeImage} 
                  alt="Dubai skyline with Burj Khalifa" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              
              {/* Premium content column */}
              <div className="md:w-1/2">
                <div className="mb-2">
                  <h2 className="text-2xl">Pick Your <span className="font-bold">Premium</span></h2>
                  <p className="text-[0.6rem] text-gray-600 mt-2 font-semibold">
                    We strive to build long-lasting partnerships with our clients, understanding their unique challenges and 
                    opportunities, and providing tailored strategies that lead to measurable success.
                  </p>
                </div>

                <div className="space-y-6 mt-7">
                  {/* Research planning */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-md">
                      <ChartBarIcon size={24} className="text-[#3754A1]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Research planning</h3>
                      <p className="text-gray-600 text-[0.6rem] mt-1 font-semibold">
                        Separating your work from your home life can improve work-life balance.
                      </p>
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 rounded-md">
                      <HandshakeIcon size={24} className="text-[#3754A1]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Investment</h3>
                      <p className="text-gray-600 text-[0.6rem] mt-1 font-semibold">
                        A business consultant provides expert advice and guidance to businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-lg max-w-6xl mt-12 flex flex-col md:flex-row justify-center gap-4">
        <button className="hover:bg-[#3754A1] hover:text-white text-gray-700 bg-transparent border border-gray-300 px-3 rounded-lg flex items-center cursor-pointer text-xs justify-center gap-2">
          Get a Free Quote
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="border hover:text-white  border-gray-300 hover:bg-[#3754A1] cursor-pointer text-gray-700 py-3 px-6 rounded flex items-center justify-center gap-2 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            <path d="M9 14h6"></path>
            <path d="M9 18h6"></path>
            <path d="M12 14v4"></path>
          </svg>
          Our Help Center
        </button>
      </div>
    </div>
  );
};

export default ValueStrategy;