import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

// Assuming these images are available in the assets folder
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
    <div className="py-16 px-4 bg-white flex flex-col md:flex-row">
      {/* Steps Section */}
      <div className="w-full md:w-1/2 pl-8 md:pl-16">
        <div className="text-center mb-6">
          <span className="text-sm text-indigo-900 font-medium py-1 px-4 rounded-full bg-white inline-flex items-center gap-2">
            •• WORKING PROCESS
          </span>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold text-gray-800">How It Works</h2>
        </div>
        <div className="text-center mb-16 max-w-lg mx-auto">
          <p className="text-gray-600">Comprehensive Suite of Cutting-Edge IT Services.</p>
        </div>
        
        {/* Flow diagram style layout */}
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-center md:items-start md:space-x-4 lg:space-x-8 mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-[200px]">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 w-20 h-20 flex items-center justify-center">
              <img src={steps[0].image || "/placeholder.svg"} alt={steps[0].title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{steps[0].title}</h3>
            <p className="text-gray-600 text-sm text-center">{steps[0].description}</p>
          </div>
          
          {/* Arrow 1 */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-indigo-900" />
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-[200px]">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 w-20 h-20 flex items-center justify-center">
              <img src={steps[1].image || "/placeholder.svg"} alt={steps[1].title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{steps[1].title}</h3>
            <p className="text-gray-600 text-sm text-center">{steps[1].description}</p>
          </div>
          
          {/* Arrow 2 */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-indigo-900" />
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-[200px]">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4 w-20 h-20 flex items-center justify-center">
              <img src={steps[2].image || "/placeholder.svg"} alt={steps[2].title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{steps[2].title}</h3>
            <p className="text-gray-600 text-sm text-center">{steps[2].description}</p>
          </div>
        </div>
        
        {/* Mobile view - vertical arrows */}
        <div className="flex flex-col items-center md:hidden">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <div className="my-2">
                  <ArrowRight className="w-6 h-6 text-indigo-900 transform rotate-90" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">Need more help? Go to our <a href="#" className="text-indigo-900 hover:underline">Support Center</a></p>
        </div>
      </div>

      {/* Form Section - Unchanged as requested */}
      <div className="w-full md:w-1/2 bg-white p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Let's Build A Future Together</h2>
        </div>
        <div className="max-w-[52rem] mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
            <div>
              <label htmlFor="first-name" className="block text-sm font-small text-gray-700 mb-2">First name</label>
              <input id="first-name" type="text" placeholder="First name" className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-small text-gray-700 mb-2">Last name</label>
              <input id="last-name" type="text" placeholder="Last name" className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-small text-gray-700 mb-2">Email</label>
            <input id="email" type="email" placeholder="you@company.com" className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block text-sm font-small text-gray-700 mb-2">Phone number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 flex items-center">AE <ChevronDown className="ml-1 h-4 w-4" /></span>
              </div>
              <input id="phone" type="tel" placeholder="+97 (555) 000-0000" className="w-full pl-16 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="service" className="block text-sm font-small text-gray-700 mb-2">Service you are interested in</label>
            <input id="service" type="text" placeholder="IT" className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm font-small text-gray-700 mb-2">Message</label>
            <textarea id="message" rows="4" placeholder="" className="w-full px-2 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="ml-2 text-xs text-[#344054]">You agree to our friendly <a href="#" className="text-[#344054] underline">privacy policy</a>.</span>
            </label>
          </div>
          <button type="submit" className="w-full bg-[#3754A1] hover:bg-blue-800 text-white py-2 rounded-lg text-xs">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepProcess;