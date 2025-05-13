import React from "react";
import { Check } from "lucide-react";

const WhatIsDataTech = () => {
  return (
    <div className="w-full">
      {/* Core values section */}
      <div className="bg-[#10142c] text-white p-8 md:p-12 md:py-16 lg:px-27 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-white">
                What is DataTech ?
              </h2>
            </div>

            <p className="text-white">
              DataTech empowers entrepreneurs consultants and remote workers to
              thrive globally with no need to register a company. We provide
              legal UAE work permites, exclusive residency solutions and a
              complient tax effecient platform to envoince clients immediately.
            </p>

            <div className="flex gap-20">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">100</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-white">Trusted by companies</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">99</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-white">
                    Genuine repeated happy customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-justify">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Operate Globally </h3>
                  <p className="text-white text-sm">
                    Work with international clients and receive payments
                    worldwide, all without the cost or complexity of starting
                    your own business.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#2c71f1] rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Access UAE Residency
                    </h3>
                    <p className="text-white text-sm">
                      We handle the entire process from visa
                      applications to biometric screenings, giving you access
                      to tax-free income, global mobility, and premium
                      financial services.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg"> Act With Integrity</h3>
                  <p className="text-white text-sm">
                    Our company exists to help merchants sell more. We make
                    every decision and measure every outcome based on how well
                    it serves our customers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Do the right thing</h3>
                  <p className="text-white text-sm">
                    Our company exists to help merchants sell more. We make
                    every decision and measure every outcome based on how well
                    it serves our customers.
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
