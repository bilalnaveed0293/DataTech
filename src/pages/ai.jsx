import React, { useState } from "react";
import {
  FaRobot,
  FaChartLine,
  FaMoneyBillWave,
  FaCog,
  FaArrowCircleRight,
  FaCheck,
  FaBolt,
  FaBuilding,
  FaUsers,
  FaMoneyBill,
  FaBrain,
  FaSync,
  FaClock,
  FaShieldAlt,
  FaLightbulb,
  FaIndustry,
  FaStore,
  FaHeart,
  FaGraduationCap,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import coin1 from "../assets/coin1.mp4";

import JoinToExplore from "../JoinToExplore";

const AIServicesPage = () => {
  window.scrollTo(0, 0);

  const [formData, setFormData] = useState({
    businessType: "",
    companySize: "",
    currentChallenges: "",
    automationGoals: "",
    website: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    preferredTime: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AI consultation form submitted:", formData);
    setSubmitted(true);
  };

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative min-h-[35rem] sm:min-h-[35rem] md:min-h-[38rem] lg:min-h-screen xl:min-h-screen 2xl:min-h-screen flex flex-col items-start text-white justify-center text-left px-2 sm:px-4 md:px-6 ">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaRobot className="text-white text-5xl" />
              <span className="bg-white text-[#2c71f1] bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                AI BUSINESS TRANSFORMATION
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Business with{" "}
              <span className="text-[#CFDFFF]">AI Innovation</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
              Custom AI agents and automation solutions designed to reduce
              operational costs by 40% while increasing productivity by 3x. Let
              us show you how AI can revolutionize your business operations.
            </p>
            <div className="flex gap-20 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">40</span>
                <div>
                  <span className="text-xl font-bold">%</span>
                  <p className="text-sm text-white text-opacity-80">
                    Cost Reduction
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold">3x</span>
                <div>
                  <p className="text-sm text-white text-opacity-80">
                    Productivity Increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // AI Solutions Section
  const AISolutionsSection = () => {
    const solutions = [
      {
        icon: <FaBrain className="w-8 h-8 text-[#2c71f1]" />,
        title: "Custom AI Agent Development",
        description:
          "Personalized AI agents trained specifically for your business processes and requirements.",
        features: [
          "Natural Language Processing",
          "Machine Learning Models",
          "Automated Decision Making",
          "24/7 Availability",
        ],
      },
      {
        icon: <FaSync className="w-8 h-8 text-[#2c71f1]" />,
        title: "Process Automation",
        description:
          "Intelligent automation of repetitive tasks to free up your team for strategic work.",
        features: [
          "Workflow Automation",
          "Data Processing",
          "Report Generation",
          "Quality Control",
        ],
      },
      {
        icon: <FaChartLine className="w-8 h-8 text-[#2c71f1]" />,
        title: "Predictive Analytics",
        description:
          "Advanced analytics to predict trends, customer behavior, and business outcomes.",
        features: [
          "Sales Forecasting",
          "Risk Assessment",
          "Customer Insights",
          "Market Analysis",
        ],
      },
      {
        icon: <FaCog className="w-8 h-8 text-[#2c71f1]" />,
        title: "System Integration",
        description:
          "Seamlessly integrate AI solutions with your existing business systems and workflows.",
        features: [
          "API Integration",
          "Database Connectivity",
          "Cloud Deployment",
          "Real-time Updates",
        ],
      },
      {
        icon: <FaShieldAlt className="w-8 h-8 text-[#2c71f1]" />,
        title: "AI Security & Compliance",
        description:
          "Ensure your AI implementations are secure, ethical, and compliant with regulations.",
        features: [
          "Data Privacy",
          "Security Protocols",
          "Compliance Monitoring",
          "Audit Trails",
        ],
      },
      {
        icon: <FaLightbulb className="w-8 h-8 text-[#2c71f1]" />,
        title: "Innovation Consulting",
        description:
          "Strategic guidance on how AI can transform your industry and business model.",
        features: [
          "Technology Roadmap",
          "ROI Analysis",
          "Change Management",
          "Training Programs",
        ],
      },
    ];

    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#CFDFFF] text-[#2c71f1] px-4 py-2 rounded-full text-sm font-medium">
              ••• AI SOLUTIONS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Comprehensive <span className="text-[#2c71f1]">AI Services</span>{" "}
              Suite
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              From custom AI agent development to complete process automation,
              we provide end-to-end AI solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-[#CFDFFF] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#2c71f1] transition-all duration-300">
                  <div className="group-hover:text-white transition-all duration-300">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <FaCheck className="w-4 h-4 text-[#2c71f1] mr-2" />
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

  // Industry Applications Section
  const IndustryApplicationsSection = () => {
    const industries = [
      {
        icon: <FaIndustry className="w-8 h-8 text-[#2c71f1]" />,
        title: "Manufacturing",
        description:
          "Optimize production lines, predictive maintenance, and quality control.",
        applications: [
          "Production Optimization",
          "Quality Assurance",
          "Supply Chain Management",
        ],
      },
      {
        icon: <FaStore className="w-8 h-8 text-[#2c71f1]" />,
        title: "E-Commerce",
        description:
          "Enhance customer experience, inventory management, and sales forecasting.",
        applications: [
          "Recommendation Systems",
          "Inventory Optimization",
          "Customer Service Bots",
        ],
      },
      {
        icon: <FaHeart className="w-8 h-8 text-[#2c71f1]" />,
        title: "Healthcare",
        description:
          "Improve patient care, diagnostic accuracy, and operational efficiency.",
        applications: [
          "Diagnostic Support",
          "Patient Monitoring",
          "Appointment Scheduling",
        ],
      },
      {
        icon: <FaGraduationCap className="w-8 h-8 text-[#2c71f1]" />,
        title: "Education",
        description:
          "Personalized learning, administrative automation, and student analytics.",
        applications: [
          "Personalized Learning",
          "Administrative Automation",
          "Performance Analytics",
        ],
      },
    ];

    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#CFDFFF] text-[#2c71f1] px-4 py-2 rounded-full text-sm font-medium">
              INDUSTRY APPLICATIONS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              AI Solutions for{" "}
              <span className="text-[#2c71f1]">Every Industry</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Our AI expertise spans across multiple industries, delivering
              customized solutions that address specific sector challenges and
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#CFDFFF] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {industry.description}
                </p>
                <ul className="space-y-1">
                  {industry.applications.map((app, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-600 flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#2c71f1] rounded-full mr-2"></div>
                      {app}
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

  // AI Consultation Form Section
  const ConsultationForm = () => (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free AI Consultation
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how AI can transform your business operations and drive
            growth
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
                  <FaBuilding className="inline mr-2 text-[#2c71f1]" />
                  Type of Business
                </label>
                <input
                  id="businessType"
                  type="text"
                  value={formData.businessType}
                  onChange={handleChange}
                  placeholder="e.g. E-commerce, Healthcare, Manufacturing"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="companySize"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaUsers className="inline mr-2 text-[#2c71f1]" />
                  Company Size
                </label>
                <select
                  id="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="currentChallenges"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaCog className="inline mr-2 text-[#2c71f1]" />
                  Current Business Challenges
                </label>
                <textarea
                  id="currentChallenges"
                  value={formData.currentChallenges}
                  onChange={handleChange}
                  placeholder="Describe your main operational challenges..."
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="automationGoals"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaBolt className="inline mr-2 text-[#2c71f1]" />
                  Automation Goals
                </label>
                <textarea
                  id="automationGoals"
                  value={formData.automationGoals}
                  onChange={handleChange}
                  placeholder="What processes would you like to automate?"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Website (Optional)
                </label>
                <input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.yourcompany.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
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
                  placeholder="+971 58 5114267"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaClock className="inline mr-2 text-[#2c71f1]" />
                  Preferred Call Time
                </label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c71f1] transition-all"
                  required
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="evening">Evening (5PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-[#2c71f1] hover:bg-[#1e5bb8] text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto"
              >
                Request Free AI Consultation
                <FaArrowCircleRight className="ml-2" />
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-12 bg-[#CFDFFF] rounded-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You!
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Your AI consultation request has been submitted successfully. Our
              AI experts will contact you shortly to discuss how we can help
              transform your business operations.
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
      <AISolutionsSection />
      <IndustryApplicationsSection />
      <ConsultationForm />
      <JoinToExplore />
    </div>
  );
};

export default AIServicesPage;
