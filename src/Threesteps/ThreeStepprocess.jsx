import React from 'react';
import businessPersonImage from '../assets/business-person.png'; // Adjust the path to your image
import bpersonImage from '../assets/3stepman.png'; // Adjust the path to your image
import first from '../assets/31.png'; // Adjust the path to your image
import second from '../assets/32.png'; // Adjust the path to your image
import third from '../assets/33.png'; // Adjust the path to your image
const ThreeStepProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Eligibility',
      description: 'We assess whether you meet the requirements for our service.',
      img: first,
    },
    {
      number: '02',
      title: 'Agreement',
      description: 'Complete a legally binding contract to safeguard your confidentiality and ensure a seamless process.',
      img: second,
    },
    {
      number: '03',
      title: 'Work Permit',
      description: 'We take care of all the required paperwork to ensure your legal entry and work eligibility in the UAE.',
     img: third,
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      {/* HOW IT GOES? Label */}
      <div className="text-center mb-2">
        <span className="text-sm text-[#4A2B2B] font-medium py-1 px-4 rounded-full bg-[#ECF2FC]inline-flex items-center gap-2">
          <span className="w-1 h-1 bg-[#110834] rounded-full"></span>
          HOW IT GOES?
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-5xl font-medium text-gray-800">Our 3 Step Process</h2>
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
          {/* Background image (bperson) */}
          <div className="absolute inset-0">
            <img
              src={bpersonImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r  from-blue-800/60">
            <img
              src={businessPersonImage}
              alt="Business Professional"
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>

          {/* Content */}
          <div className="relative p-8 md:p-12 min-h-[500px] flex flex-col justify-start">
            <div className="space-y-8 max-w-xs">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className=" p-2 rounded-lg w-14 h-14 flex-shrink-0 flex items-center justify-center">
                    <img src={step.img} alt="" srcset="" />
                  </div>

                  {/* Step content */}
                  <div>
                    <h3 className="text-white text-lg font-bold flex items-center gap-2">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-white/80 mt-1 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Explore as you Go button */}
          <div className="absolute bottom-6 right-6">
            <button className="bg-[#3754A1] text-white px-4 py-2 rounded flex items-center gap-2 text-sm cursor-pointer" >
              Explore as you Go
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepProcess;