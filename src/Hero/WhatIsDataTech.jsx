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
              Data Tech is a Dubai-based IT consultancy umbrella company. As
              well as providing full 360-degree IT services to clients, we also
              provide invoicing facilities available to our consultants,
              allowing them to invoice their clients through us for a small fee
              without the need to set up their own company, deal with VAT
              returns, set up offices, manage end-of-year accounts, accountants,
              etc. and other issues related to setting up your own company.
              <br></br>
              <br></br>We employ you in our company as a consultant, and as an
              established company, you get immediate access, if required, to UAE
              residency and our premium banking facilities, which will allow
              you, within six months, to avail UAE banking services such as
              property loans, car loans, credit cards, etc.
              <br></br>
              <br></br>We handle the entire process for you end-to-end and can
              provide immediate solutions for invoicing and tax relocation,
              taking out all the guesswork and stress from the process.
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
                      We handle the entire process from visa applications to
                      biometric screenings, giving you access to tax-free
                      income, global mobility, and premium financial services.
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
                  <div>
                    <h3 className="font-semibold text-lg">
                      Access Premium Banking Services
                    </h3>
                    <p className="text-white text-sm">
                      As our employed consultant, gain immediate access to UAE's
                      premium banking facilities including property loans, car
                      loans, credit cards, and investment opportunities within
                      six months.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Full Legal Tax Compliance
                    </h3>
                    <p className="text-white text-sm">
                      We manage all VAT returns, accounting, legal
                      documentation, and compliance requirements, eliminating
                      the administrative burden of running your own consultancy
                      business.
                    </p>
                  </div>
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
