import React, { useState } from "react";
import {
  FaRobot,
  FaChartLine,
  FaMoneyBillWave,
  FaUserTie,
  FaArrowRight,
  FaCheck,
  FaBuilding,
  FaGlobe,
  FaUsers,
  FaMoneyBill,
  FaGlobeAmericas,
} from "react-icons/fa";

const AiBusinessGrowth = () => {
  const [formData, setFormData] = useState({
    businessType: "",
    countryOfOrigin: "",
    numberOfEmployees: "",
    turnoverLevel: "",
    website: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Main Section */}
      <div className="bg-[#10142c] text-white p-8 md:p-12 md:py-16 lg:px-27 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FaRobot className="text-[#2c71f1] text-4xl" />
              <h2 className="text-3xl font-bold text-white">
                AI-Driven Business Growth
              </h2>
            </div>

            <p className="text-white">
              While your competitors embrace AI to cut costs and accelerate
              growth, can your business afford to fall behind? We provide
              cutting-edge AI solutions and latest technology implementations
              that reduce overheads, increase output, and keep you ahead of the
              competition.
            </p>

            <p className="text-white">
              Don't let your competition outpace you with superior technology.
              Take our free consultation to discover how upgrading to the latest
              AI and tech solutions can transform your operations, slash costs,
              and accelerate your business growth in today's digital landscape.
            </p>

            <div className="flex gap-20">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">40</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-xs text-white">Average cost reduction</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">3x</span>
                <div>
                  <p className="text-xs text-white">
                    Productivity increase with our AI solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-justify">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-2 mt-1">
                  <FaChartLine className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Optimize Workflows</h3>
                  <p className="text-white text-sm">
                    Identify and eliminate inefficiencies with AI-powered
                    process analysis, saving time and resources across all
                    departments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-2 mt-1">
                  <FaMoneyBillWave className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Reduce Overheads</h3>
                  <p className="text-white text-sm">
                    Automate repetitive tasks and streamline operations to
                    significantly lower your operational costs while increasing
                    output.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-2 mt-1">
                  <FaUserTie className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Expert Contractors</h3>
                  <p className="text-white text-sm">
                    Access our network of specialist IT contractors for your
                    projects, with flexible arrangements to suit your business
                    needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#2c71f1] rounded-full p-2 mt-1">
                  <FaCheck className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Proven Results</h3>
                  <p className="text-white text-sm">
                    Join the growing number of businesses that have transformed
                    their operations with our AI solutions and consulting
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification Form */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get Your Free AI Consultation
            </h2>
            <p className="text-gray-600">
              Complete this short form to qualify for a free consultation with
              our AI experts
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <FaBuilding className="inline mr-2 text-[#3754A1] mb-1" />{" "}
                    Type of Business
                  </label>
                  <input
                    id="businessType"
                    type="text"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="e.g. E-commerce, Healthcare, Manufacturing"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="countryOfOrigin"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <FaGlobeAmericas className="inline mr-2 text-[#3754A1] mb-1" />{" "}
                    Country of Origin
                  </label>
                  <input
                    id="countryOfOrigin"
                    type="text"
                    value={formData.countryOfOrigin}
                    onChange={handleChange}
                    placeholder="e.g. United Arab Emirates, UK, USA"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="numberOfEmployees"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <FaUsers className="inline mr-2 text-[#3754A1] mb-1" />{" "}
                    Number of Employees
                  </label>
                  <select
                    id="numberOfEmployees"
                    value={formData.numberOfEmployees}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501+">501+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="turnoverLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <FaMoneyBill className="inline mr-2 text-[#3754A1] mb-1" />{" "}
                    Annual Turnover Level
                  </label>
                  <select
                    id="turnoverLevel"
                    value={formData.turnoverLevel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  >
                    <option value="">Select range</option>
                    <option value="Under $1M">Under $1M</option>
                    <option value="$1M-$5M">$1M-$5M</option>
                    <option value="$5M-$20M">$5M-$20M</option>
                    <option value="$20M-$100M">$20M-$100M</option>
                    <option value="$100M+">$100M+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <FaGlobe className="inline mr-2 text-[#3754A1] mb-1" />{" "}
                    Company Website
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.yourcompany.com"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <FaUserTie className="inline mr-2 text-[#3754A1] mb-1" />{" "}
                    Contact Name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactPhone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="+971 58 5114267"
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="bg-[#3754A1] hover:bg-[#2c4178] text-white cursor-pointer px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center mx-auto"
                >
                  Request Free Consultation
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 bg-[#CEDAFA] rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Your consultation request has been submitted successfully. One
                of our AI experts will contact you shortly to discuss how we can
                help your business grow.
              </p>
            </div>
          )}

          {/* Third Business Unit Info */}
          <div className="mt-16 bg-[#CEDAFA] p-8 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Expert IT Consultants For Hire
              </h3>
              <p className="text-gray-600 mt-2">
                Need specialized expertise to implement the latest technologies?
                Our expert IT consultants help you upgrade systems, reduce
                costs, and stay competitive. If you don't modernize, your
                competitors will gain the advantage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiBusinessGrowth;
