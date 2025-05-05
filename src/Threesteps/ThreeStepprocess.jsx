import React from 'react';
import businessPersonImage from '../assets/business-person.png'; // Adjust the path to your image
import bpersonImage from '../assets/3stepman.png'; // Adjust the path to your image
import first from '../assets/31.png'; // Adjust the path to your image
import second from '../assets/32.png'; // Adjust the path to your image
import third from '../assets/33.png'; // Adjust the path to your image
import eligibilityImg from '../assets/Eligibility.png';
import agreementImg from '../assets/Agreement.png';
import workPermitImg from '../assets/Work Permit.png';

const ThreeStepProcess = () => {
  const steps = [
    {
      title: 'Eligibility Check',
      description: "We evaluate your profile and business model to ensure you're qualified for our UAE-based solutions.",
      image: eligibilityImg,
    },
    {
      title: 'Legal Agreement',
      description: "A transparent, compliant agreement secures your path forward with confidence.",
      image: agreementImg,
    },
    {
      title: 'Residency & Permit Setup',
      description: "We manage the full visa and work permit process — setting you up for success in the UAE and beyond.",
      image: workPermitImg,
    },
  ];


  return (
    <div className="py-16 px-4 bg-white">
      {/* WORKING PROCESS Label */}
      <div className="text-center mb-6">
        <span className="text-sm text-indigo-900 font-medium py-1 px-4 rounded-full bg-white inline-flex items-center gap-2">
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
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="hidden md:block absolute top-1/4 left-1/2 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300 z-0">
          <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 rotate-45">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 19L19 5M19 5V19M19 5H5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Icon */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 w-20 h-20 flex items-center justify-center">
              <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
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
          Need more help? Go to our <a href="#" className="text-indigo-900 hover:underline">Support Center</a>
        </p>
      </div>
    </div>
  );
};

export default ThreeStepProcess;