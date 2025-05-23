import React from "react";
import { FaCalculator, FaRobot, FaUserTie, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesOverview = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaCalculator className="w-12 h-12 text-[#3754A1]" />,
      title: "Tax Efficient Umbrella Invoicing",
      subtitle: "Maximize Your Take-Home Earnings",
      description:
        "Professional umbrella invoicing services with UAE residency benefits. Pay zero personal income tax while maintaining global client relationships.",
      features: [
        "Zero Personal Income Tax",
        "UAE Residency & Banking",
        "Global Invoice Management",
        "Legal Compliance Support",
      ],
      bgColor: "bg-gradient-to-br from-[#3754A1] to-[#2c4178]",
      link: '/tax'
    },
    {
      icon: <FaRobot className="w-12 h-12 text-[#2c71f1] " />,
      title: "AI Implementation Solutions",
      subtitle: "Transform Your Business Operations",
      description:
        "Custom AI agents and automation solutions to reduce operational costs by 40% while increasing productivity by 3x through intelligent process optimization.",
      features: [
        "Custom AI Agent Development",
        "Process Automation",
        "40% Cost Reduction",
        "3x Productivity Increase",
      ],
      bgColor: "bg-gradient-to-br from-[#2c71f1] to-[#1e5bb8]",
      link: '/ai'
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-[#6366f1]" />,
      title: "Expert IT Consultant Hire",
      subtitle: "Access Top-Tier IT Talent",
      description:
        "Connect with specialized IT contractors for your projects. Flexible arrangements with daily, weekly, or monthly engagements to meet your business needs.",
      features: [
        "Vetted IT Specialists",
        "Flexible Engagement Terms",
        "Project-Based Solutions",
        "Global Talent Network",
      ],
      bgColor: "bg-gradient-to-br from-[#6366f1] to-[#4f46e5]",
      link: '/consultants'
    },
  ];

  const handleServiceClick = (serviceTitle) => {
    // You can implement navigation logic here
    console.log(`Navigate to ${serviceTitle}`);
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#DEE2FD] text-[#3754A1] px-4 py-2 rounded-full text-sm font-medium mb-4">
            ••• OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Three Pillars of{" "}
            <span className="text-[#3754A1]">Business Growth</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Datatech operates across three specialized domains to help
            businesses optimize operations, reduce costs, and accelerate growth
            through strategic solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 text-white relative overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              onClick={() => handleServiceClick(service.title)}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="bg-white bg-opacity-20 p-4 rounded-xl w-20 h-20 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white text-opacity-90 text-sm font-medium mb-4">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-white text-opacity-80 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="text-white text-opacity-90">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex items-center justify-between" onClick={() => navigate(service.link)}>
                  <span className="text-white text-opacity-80 text-sm" >
                    Learn More
                  </span>
                  <div className="bg-white bg-opacity-20 p-3 rounded-full group-hover:bg-opacity-30 transition-all duration-300">
                    <FaArrowRight className="w-4 h-4 text-[#3754A1]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default ServicesOverview;
