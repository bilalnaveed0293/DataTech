import React from 'react';

const WhatIsDataTech = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#3754A1]/5 rounded-2xl p-8 md:p-12 shadow-lg border border-[#3754A1]/10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What is <span className="text-[#3754A1]">Data Tech</span>?
          </h2>
          
          <h3 className="text-xl md:text-2xl font-semibold text-[#3754A1] mb-6">
            Operate Without Borders — Legally & Effortlessly
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-10 text-lg max-w-4xl">
            Data Tech empowers entrepreneurs, consultants, and remote workers to thrive globally 
            with no need to register a company. We provide legal UAE work permits, exclusive 
            residency solutions, and a compliant, tax-efficient platform to invoice clients 
            immediately — no licenses, office rentals, VAT returns, or annual reports required.
          </p>
          
          <button className="bg-[#3754A1] hover:bg-white cursor-pointer hover:text-black text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-md">
            Learn More About Our Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDataTech;