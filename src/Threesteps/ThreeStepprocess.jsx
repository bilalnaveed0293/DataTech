import React from 'react';
import businessPersonImage from '../assets/business-person.png'; // Adjust the path to your image

const ThreeStepProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Eligibility',
      description: 'We assess whether you meet the requirements for our service.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Agreement',
      description: 'Complete a legally binding contract to safeguard your confidentiality and ensure a seamless process.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our team begins the transformation process following our proven methodology.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* HOW IT GOES? Label */}
      <div className="text-center mb-2">
        <span className="text-sm text-blue-600 font-medium py-1 px-4 rounded-full bg-white inline-flex items-center gap-2">
          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
          HOW IT GOES?
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-5xl font-mudium text-gray-800">Our 3 Step Process</h2>
      </div>

      {/* Subheader */}
      <div className="text-center mb-16 max-w-xs mx-auto">
        <p className="text-gray-600 font-medium text-xs">
          Seamless IT transformation with DataTech—efficient, secure, 
          and built to scale. Explore our 6-step process today
        </p>
      </div>

      {/* Process Steps Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          {/* Background with overlay and image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/60">
            <img 
              src={businessPersonImage} 
              alt="Business Professional" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
            <div className="space-y-12 max-w-lg">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="bg-white p-3 rounded-lg w-12 h-12 flex-shrink-0">
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div>
                    <h3 className="text-white text-xl font-bold flex items-center gap-2">
                      <span className="text-white/80">{step.number}.</span> {step.title}
                    </h3>
                    <p className="text-white/80 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepProcess;