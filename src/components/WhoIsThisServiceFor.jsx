import React from "react";
import {
  FaUserTie,
  FaGlobeAmericas,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

const WhoIsThisServiceFor = () => {
  const clientTypes = [
    {
      icon: <FaUserTie className="w-8 h-8 text-[#3754A1]" />,
      title: "Consultants",
      description:
        "Professionals seeking tax efficiency while maintaining global client relationships.",
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8 text-[#3754A1]" />,
      title: "Freelancers",
      description:
        "Remote workers looking to maximize earnings through strategic tax planning.",
    },
    {
      icon: <FaBriefcase className="w-8 h-8 text-[#3754A1]" />,
      title: "Business Owners",
      description:
        "Entrepreneurs seeking to reduce company tax burden and optimize global operations.",
    },
  ];

  return (
    <div className="w-full bg-[#f8fafc] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#DEE2FD] text-[#3754A1] px-4 py-1 rounded-full text-sm font-medium mb-4">
            TAX OPTIMIZATION SOLUTIONS
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Who Is This <span className="text-[#3754A1]">Service</span> For?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-8">
            All consultant and freelance employees and Business owners worldwide
            looking to reduce their tax burdens. We can help providing expert
            advice and solutions with both relocation to the UAE as well as
            non-relocation solutions for those not yet ready to leave their
            country.
          </p>
         
        </div>

        {/* Client Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-[#3754A1]"
            >
              <div className="bg-[#DEE2FD] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {client.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {client.title}
              </h3>
              <p className="text-gray-600 mb-6">{client.description}</p>
            </div>
          ))}
        </div>

     
      </div>
    </div>
  );
};

export default WhoIsThisServiceFor;
