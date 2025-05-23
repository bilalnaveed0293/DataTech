import React, { useState } from "react";
import {
  FaCalculator,
  FaGlobeAmericas,
  FaUserTie,
  FaBriefcase,
  FaArrowRight,
  FaCheck,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBuilding,
  FaUsers,
  FaMoneyBill,
  FaHome,
  FaHandshake,
  FaChartLine,
  FaUmbrella,
  FaCreditCard,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import JoinToExplore from "../JoinToExplore";
import coin1 from "../assets/coin1.mp4";


const TaxServicesPage = () => {
  //scroll to top
  window.scrollTo(0, 0);

  const [formData, setFormData] = useState({
    businessType: "",
    countryOfOrigin: "",
    annualIncome: "",
    currentTaxRate: "",
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
    console.log("Tax consultation form submitted:", formData);
    setSubmitted(true);
  };

  // Hero Section Component
  const HeroSection = () => (
    <div className="bg-gradient-to-br from-[#3754A1] to-[#2c4178] text-white py-20 min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={coin1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaCalculator className="text-[#2c4178] text-5xl" />
              <span className="bg-white text-[#2c4178] bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                TAX OPTIMIZATION SOLUTIONS
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Pay <span className="text-[#DEE2FD]">Zero</span> Personal Income
              Tax
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              Professional umbrella invoicing services with UAE residency
              benefits. Keep 100% of your earnings while maintaining global
              client relationships through our comprehensive tax-efficient
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#3754A1] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Start Tax Assessment
                <FaArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#3754A1] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );

  // Benefits Section Component
  const BenefitsSection = () => {
    const benefits = [
      {
        icon: <FaMoneyBillWave className="w-8 h-8 text-[#3754A1]" />,
        title: "Zero Personal Income Tax",
        description:
          "Enjoy 100% of your earnings with Dubai's zero personal income tax policy, allowing you to reinvest, save, and grow your wealth without deductions.",
      },
      {
        icon: <FaCreditCard className="w-8 h-8 text-[#3754A1]" />,
        title: "Exclusive Banking Services",
        description:
          "Gain access to premier banking solutions, including multi-currency accounts, high-end financial management, and seamless international transactions.",
      },
      {
        icon: <FaShieldAlt className="w-8 h-8 text-[#3754A1]" />,
        title: "Health Insurance Coverage",
        description:
          "Top-tier health insurance for extensive medical coverage and peace of mind for you and your family.",
      },
      {
        icon: <FaHome className="w-8 h-8 text-[#3754A1]" />,
        title: "UAE Residency Benefits",
        description:
          "Secure UAE residency with access to world-class infrastructure, safety, and strategic business location.",
      },
      {
        icon: <FaFileInvoiceDollar className="w-8 h-8 text-[#3754A1]" />,
        title: "Professional Invoicing",
        description:
          "Streamlined invoicing system that handles all your client billing professionally and compliantly.",
      },
      {
        icon: <FaHandshake className="w-8 h-8 text-[#3754A1]" />,
        title: "Legal Compliance Support",
        description:
          "Full legal and regulatory compliance support to ensure your business operates within all required frameworks.",
      },
    ];

    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#DEE2FD] text-[#3754A1] px-4 py-2 rounded-full text-sm font-medium">
              ••• COMPREHENSIVE BENEFITS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Everything You Need for{" "}
              <span className="text-[#3754A1]">Tax Efficiency</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Our comprehensive package includes residency, banking, health
              insurance, and professional services to maximize your tax
              efficiency while maintaining the highest standards of service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#DEE2FD] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Target Audience Section
  const TargetAudienceSection = () => {
    const clientTypes = [
      {
        icon: <FaUserTie className="w-8 h-8 text-[#3754A1]" />,
        title: "Consultants",
        description:
          "Professionals seeking tax efficiency while maintaining global client relationships.",
        features: [
          "High-value contracts",
          "International clients",
          "Project-based work",
        ],
      },
      {
        icon: <FaGlobeAmericas className="w-8 h-8 text-[#3754A1]" />,
        title: "Freelancers",
        description:
          "Remote workers looking to maximize earnings through strategic tax planning.",
        features: [
          "Digital nomads",
          "Remote specialists",
          "Creative professionals",
        ],
      },
      {
        icon: <FaBriefcase className="w-8 h-8 text-[#3754A1]" />,
        title: "Business Owners",
        description:
          "Entrepreneurs seeking to reduce company tax burden and optimize global operations.",
        features: [
          "Service businesses",
          "E-commerce owners",
          "Digital agencies",
        ],
      },
    ];

    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#DEE2FD] text-[#3754A1] px-4 py-2 rounded-full text-sm font-medium">
              PERFECT FOR
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Who Benefits from Our{" "}
              <span className="text-[#3754A1]">Tax Services?</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Our tax optimization solutions are designed for professionals and
              business owners worldwide looking to reduce their tax burden
              through strategic relocation and smart financial planning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#DEE2FD] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {client.title}
                </h3>
                <p className="text-gray-600 mb-4">{client.description}</p>
                <ul className="space-y-2">
                  {client.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <FaCheck className="w-4 h-4 text-[#3754A1] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Consultation Form Section
  const ConsultationForm = () => (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Tax Consultation
          </h2>
          <p className="text-gray-600 text-lg">
            Complete this form to receive a personalized tax optimization
            assessment
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaBriefcase className="inline mr-2 text-[#3754A1]" />
                  Type of Business
                </label>
                <input
                  id="businessType"
                  type="text"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="e.g. Consulting, Freelancing, E-commerce"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="countryOfOrigin"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaGlobeAmericas className="inline mr-2 text-[#3754A1]" />
                  Current Country of Residence
                </label>
                <input
                  id="countryOfOrigin"
                  type="text"
                  value={formData.countryOfOrigin}
                  onChange={handleChange}
                  placeholder="e.g. United Kingdom, Germany, Canada"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="annualIncome"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaMoneyBill className="inline mr-2 text-[#3754A1]" />
                  Annual Income Range
                </label>
                <select
                  id="annualIncome"
                  value={formData.annualIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                >
                  <option value="">Select income range</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="currentTaxRate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaCalculator className="inline mr-2 text-[#3754A1]" />
                  Current Tax Rate
                </label>
                <select
                  id="currentTaxRate"
                  value={formData.currentTaxRate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                >
                  <option value="">Select tax rate</option>
                  <option value="20-30%">20% - 30%</option>
                  <option value="30-40%">30% - 40%</option>
                  <option value="40-50%">40% - 50%</option>
                  <option value="50%+">50%+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaGlobeAmericas className="inline mr-2 text-[#3754A1]" />
                  Website (Optional)
                </label>
                <input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.yourwebsite.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaUserTie className="inline mr-2 text-[#3754A1]" />
                  Full Name
                </label>
                <input
                  id="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactPhone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="+44 20 1234 5678"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3754A1] transition-all"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-[#3754A1] hover:bg-[#2c4178] text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto"
              >
                Get Free Tax Assessment
                <FaArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-12 bg-[#DEE2FD] rounded-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Your tax consultation request has been submitted successfully. Our
              tax optimization experts will contact you within 24 hours to
              discuss your personalized tax strategy.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <ConsultationForm />
      <JoinToExplore />
    </div>
  );
};

export default TaxServicesPage;
