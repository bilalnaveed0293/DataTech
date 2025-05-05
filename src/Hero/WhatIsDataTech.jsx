import React from 'react';
import { Check } from 'lucide-react';

const WhatIsDataTech = () => {
  return (
    <div className="w-full">
      {/* Core values section */}
      <div className="bg-[#101c4b] text-white p-8 md:p-12 lg:px-27 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white">What is DataTech</h2>
            </div>

            <p className="text-white">
              DataTech empowers enterprenues consultants and remote workers to thrive globally with no need to register a company.We provide legal UAE work permites, exclusive residency solutions and a complient tax effecient platform to envoince clients immediately.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">98</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-white">Trusted by companies</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">99</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-white">Genuine repeated happy customers.</p>
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
                  <p className="text-white text-sm">
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
                  <p className="text-white text-sm">
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
                  <p className="text-white text-sm">
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
                  <p className="text-white text-sm">
                    Our company exists to help merchants sell more. We make every decision and measure every outcome
                    based on how well it serves our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsDataTech;