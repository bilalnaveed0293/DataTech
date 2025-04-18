import React from 'react';
import tax1 from '../assets/tax1.png';
import dollar from '../assets/dollar.png';
import empire from '../assets/empire.png';
import hosp from '../assets/hosp.png';

const BenefitsSection = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-6 w-full max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <button className="bg-[#CFDFFF] text-[#3754A1] px-3 py-1 rounded-full text-xs font-medium">
          ••• WHAT WE OFFER
        </button>
        <h2 className="text-3xl font-bold mt-4 text-gray-900">Explore Our Benefits</h2>
        <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
          Our customized solutions include residency, health insurance, and strategic financial planning—helping you
          maximize earnings while unlocking global opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {/* Health Insurance Card (First Column) */}
        <div className="bg-white rounded-md p-4 border border-gray-200 w-full max-h-64 flex flex-col justify-center items-center md:mt-16 group">
          <div className="flex justify-center mb-2">
            <div className="bg-blue-50 p-2 rounded-full">
              <img src={hosp} alt="Health Insurance" className="w-8 h-8 object-contain" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-1">Health Insurance</h3>
          <p className="text-gray-600 text-xs text-center">
            Top-tier health insurance for extensive medical coverage and peace of mind.
          </p>
          <div className="mt-1 text-center relative h-8">
            <button className="inline-flex items-center text-gray-600 text-xs mt-8 transition-opacity duration-300 group-hover:opacity-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
            <span className="absolute inset-0 flex items-center justify-center text-[#3754A1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer mt-8">
                Learn More
              </span>
          </div>
        </div>

        {/* Second Column Wrapper (No Personal Income Tax + Banking Services) */}
        <div className="flex flex-col gap-4 md:-mt-10">
          {/* No Personal Income Tax Card */}
          <div className="bg-white rounded-md p-6 border border-gray-200 w-full min-h-56 group">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <img src={tax1} alt="No Personal Income Tax" className="w-8 h-8 object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">No Personal Income Tax</h3>
            <p className="text-gray-600 text-xs text-center">
              Enjoy 100% of your earnings with Dubai's zero personal income tax policy, allowing you to reinvest, save, and grow your wealth without deductions.
            </p>
            <div className="mt-4 text-center relative h-6">
              <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm transition-opacity duration-300 group-hover:opacity-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
              <span className="absolute inset-0 flex items-center justify-center text-[#3754A1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </div>
          </div>

          {/* Banking Services Card */}
          <div className="bg-white rounded-md p-6 border border-gray-200 w-full min-h-56 group">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <img src={dollar} alt="Exclusive Banking Services" className="w-8 h-8 object-contain" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Exclusive Banking Services</h3>
            <p className="text-gray-600 text-xs text-center">
              Gain access to premier banking solutions, including multi-currency accounts, high-end financial management, and seamless international transactions.
            </p>
            <div className="mt-4 text-center relative h-6">
              <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm transition-opacity duration-300 group-hover:opacity-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
              <span className="absolute inset-0 flex items-center justify-center text-[#3754A1]  text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </div>
          </div>
        </div>

        {/* Financial Independence Card (Third Column) */}
        <div className="bg-white rounded-md p-4 border border-gray-200 w-full max-h-64 flex flex-col justify-center items-center md:mt-16 group">
          <div className="flex justify-center mb-2">
            <div className="bg-blue-50 p-2 rounded-full">
              <img src={empire} alt="Financial Independence" className="w-8 h-8 object-contain" />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-center mb-1">Financial Independence</h3>
          <p className="text-gray-600 text-xs text-center">
            Strategic planning and tax optimization to maximize wealth and business growth.
          </p>
          <div className="mt-2 text-center relative h-8">
            <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-xs mt-8 transition-opacity duration-300 group-hover:opacity-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </button>
            <span className="absolute inset-0 flex items-center justify-center text-[#3754A1] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-8">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;