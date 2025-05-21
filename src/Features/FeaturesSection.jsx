import React from "react";
import { Plus } from "lucide-react";
import fpic1 from "../assets/doc.jpg"; // Update with the actual path to your vector image
import fpic2 from "../assets/atm.jpg"; // Update with the actual path to your vector image
import fpic3 from "../assets/skysc.jpg"; // Update with the actual path to your vector image
import tax from "../assets/tax.png"; // Update with the actual path to your vector image
import empire from "../assets/empire.png"; // Update with the actual path to your vector image
import hexagon from "../assets/hexagon.png"; // Update with the actual path to your vector image
import coin from "../assets/coin.png"; // Update with the actual path to your vector image

const FeaturesSection = () => {
  const features = [
    {
      title: "Personalised Consultation",
      description:
        "Our consultants listen to your requirements and wishes and make a personalised plan and offer for you.",
      icon: coin,
      position: "top",
    },
    {
      title: "Full Documentation Handling",
      description:
        "Full end-to-end documentation handling ensuring an easy and stress-free procedure for you, along with expert advice.",
      icon: tax,
      position: "bottom",
    },
    {
      title: "Premium Health Insurance",
      description:
        "Comprehensive health insurance available with UAE’s premium hospitals.",
      icon: hexagon,
      position: "top",
    },
    {
      title: "Zero Tax & Financial Freedom",
      description:
        "No personal income tax, financial independence, and access to exclusive banking services.",
      icon: empire,
      position: "bottom",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[92%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 mb-12 sm:mb-16">
          {/* Left side - Text */}
          <div className="w-full">
            <div className="inline-block bg-blue-100 text-indigo-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
              ••• OUR FEATURES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 mb-2">
              Our <span className="font-bold text-[#173d85]">Services </span>
              and <span className="font-bold text-[#173d85]">Advantages</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-indigo-700 font-medium">
              Join us.
            </p>
          </div>

          {/* Right side - Images */}
          <div className="relative max-sm:hidden w-full max-w-[400px] md:max-w-[500px] h-[120px] sm:h-[160px] md:h-[200px] mt-4 md:mt-0">
            <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-36 h-16 sm:h-20 md:h-32 overflow-hidden rounded-lg shadow-md">
              <img
                src={fpic1}
                alt="City view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-6 sm:top-4 left-20 sm:left-24 md:left-32 w-24 sm:w-32 md:w-44 h-16 sm:h-20 md:h-32 overflow-hidden rounded-lg shadow-md">
              <img
                src={fpic2}
                alt="Aerial city view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-12 left-36 sm:left-44 md:left-64 w-24 sm:w-32 md:w-48 h-28 sm:h-36 md:h-32 overflow-hidden rounded-lg shadow-md">
              <img
                src={fpic3}
                alt="Dubai skyline"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-[-8px] sm:top-[-10px] left-28 sm:left-36 md:left-48 text-blue-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="absolute bottom-[-8px] sm:bottom-[-10px] left-28 sm:left-36 md:left-48 text-blue-600">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V20M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 flex flex-col h-full ${
                feature.position === "top"
                  ? "lg:-mt-6 transform transition-transform duration-700 hover:-translate-y-2"
                  : "lg:mt-6 transform transition-transform duration-700 hover:-translate-y-2"
              }`}
            >
              <div className="text-gray-800 mb-4">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow">
                {feature.description}
              </p>
              <div className="flex justify-start mt-auto">
                <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                  <Plus size={12} sm:size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
