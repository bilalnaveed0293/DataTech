import React from 'react';

import { Check, ArrowUpRight } from 'lucide-react';
const WhatIsDataTech = () => {
  return (
    <div className="w-full">
      {/* Top buttons section */}

      {/* Core values section */}
      <div className="bg-indigo-800 text-white p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="text-indigo-200">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L14.4 8.8H21.6L15.6 13.2L18 20L12 15.6L6 20L8.4 13.2L2.4 8.8H9.6L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-indigo-100">What is DataTech</h2>
            </div>

            <p className="text-indigo-200">
             DataTech empowers enterprenues consultants and remote workers to thrive globally with no need to register a company.We provide legal UAE work permites, exclusive residency solutions and a complient tax effecient platform to envoince clients immediately.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">98</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-indigo-200">Trusted by companies</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">99</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-indigo-200">Genuine repeated happy customers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Operate Globally </h3>
                  <p className="text-indigo-200 text-sm">
                  Operate Globally Without Setting Up a Company
                  </p>
                </div>
              </div>
            </div>

           

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Access UAE Residency</h3>
                  <p className="text-indigo-200 text-sm">
                  Access UAE Residency
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Act With Integrity</h3>
                  <p className="text-indigo-200 text-sm">
                    Our company exists to help merchants sell more. We make every decision and measure every outcome
                    based on how well it serves our customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Do the right thing</h3>
                  <p className="text-indigo-200 text-sm">
                    Our company exists to help merchants sell more. We make every decision and measure every outcome
                    based on how well it serves our customers.
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Resolution indicator */}
      
    </div>
  );
};

export default WhatIsDataTech;