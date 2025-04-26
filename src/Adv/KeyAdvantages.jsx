import React from 'react';
import { Check } from 'lucide-react';

const KeyAdvantages = () => {
  const advantages = [
    "Start invoicing immediately — with zero overhead",
    "Keep 100% of your income",
    "No personal income tax",
    "Access exclusive UAE banking",
    "Seamless work permit & residency setup",
    "Pro presence without forming a company"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Key Advantages
          </h2>
          <p className="text-xl text-[#3754A1] font-semibold">
            What You Gain With Data Tech
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="p-6 flex items-start border-b md:border-r border-blue-100 last:border-b-0 md:even:border-r-0 lg:nth-child-3n:border-r-0"
              >
                <div className="bg-[#3754A1] rounded-full p-1 flex-shrink-0 mr-4">
                  <Check size={18} className="text-white" />
                </div>
                <p className="text-gray-700 font-medium">{advantage}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[#3754A1]/10 to-[#3754A1]/5 p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Ready to transform your business operations?
            </p>
            <button className="bg-[#3754A1] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition duration-300 shadow-md">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages;