import React from 'react';
import businessPersonImage from '../assets/business-person.png'; // Adjust the path to your image
import bpersonImage from '../assets/3stepman.png'; // Adjust the path to your image
import first from '../assets/31.png'; // Adjust the path to your image
import second from '../assets/32.png'; // Adjust the path to your image
import third from '../assets/33.png'; // Adjust the path to your image

const ThreeStepProcess = () => {
  const steps = [
    {
      title: 'Choose Services',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12C18.48 12 14 16.48 14 22C14 27.52 18.48 32 24 32C29.52 32 34 27.52 34 22C34 16.48 29.52 12 24 12ZM24 30C19.59 30 16 26.41 16 22C16 17.59 19.59 14 24 14C28.41 14 32 17.59 32 22C32 26.41 28.41 30 24 30Z" fill="#9370DB"/>
          <path d="M24 20C22.9 20 22 20.9 22 22C22 23.1 22.9 24 24 24C25.1 24 26 23.1 26 22C26 20.9 25.1 20 24 20Z" fill="#9370DB"/>
          <path d="M32 32L28 28" stroke="#9370DB" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Project Analysis',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 34V24M24 34V14M34 34V20" stroke="#9370DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="12" y="24" width="4" height="10" fill="#9370DB"/>
          <rect x="22" y="14" width="4" height="20" fill="#9370DB"/>
          <rect x="32" y="20" width="4" height="14" fill="#9370DB"/>
        </svg>
      ),
    },
    {
      title: 'Got Final Result',
      description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" stroke="#9370DB" strokeWidth="2"/>
          <path d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34" stroke="#9370DB" strokeWidth="2" strokeLinecap="round"/>
          <path d="M30 24C30 21.79 28.21 20 26 20" stroke="#9370DB" strokeWidth="2" strokeLinecap="round"/>
          <path d="M34 24H30M24 14V18M24 30V34M14 24H18" stroke="#9370DB" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      {/* WORKING PROCESS Label */}
      <div className="text-center mb-6">
        <span className="text-sm text-purple-600 font-medium py-1 px-4 rounded-full bg-purple-100 inline-flex items-center gap-2">
          •• WORKING PROCESS
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-5xl font-bold text-gray-800">How It Works</h2>
      </div>

      {/* Subheader */}
      <div className="text-center mb-16 max-w-lg mx-auto">
        <p className="text-gray-600">
          Comprehensive Suite of Cutting-Edge IT Services.
        </p>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting lines */}
        <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300 z-0">
          <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 rotate-45">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="hidden md:block absolute top-1/4 left-1/2 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300 z-0">
          <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 rotate-45">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 w-16 h-16 flex items-center justify-center">
              {step.icon}
            </div>

            {/* Step content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Support Center */}
      <div className="text-center mt-16">
        <p className="text-gray-600">
          Need more help? Go to our <a href="#" className="text-purple-600 hover:underline">Support Center</a>
        </p>
      </div>
    </div>
  );
};

export default ThreeStepProcess;