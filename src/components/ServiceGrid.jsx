import React from 'react';
import ServiceCard from './ServiceCard';

// Import your PNG images
import artificialIntelligence from '../assets/ai.png';
import cloudIt from '../assets/cloud.png';
import appDevelopment from '../assets/appdev.png';
import eCommerce from '../assets/e-business.png';
import businessManagement from '../assets/businessmanagement.png';
import crmHr from '../assets/hr.png';
import digitalMarketing from '../assets/digitalmarketing.png';
import eLearning from '../assets/e-learning.png';
import enterpriseConnectivity from '../assets/enterpriseconn.png';
import logisticsSupport from '../assets/logisticsupport.png';
import itExpertise from '../assets/itexp.png';

const services = [
  {
    title: 'Artificial Intelligence & Data Analytics',
    description: 'Automating decisions, predictive insights, data analysis.',
    image: artificialIntelligence,
  },
  {
    title: 'Cloud & IT Infrastructure Services',
    description: 'Secure cloud storage, IT support, ERP solutions.',
    image: cloudIt,
  },
  {
    title: 'App Development',
    description: 'Web, mobile apps, UI/UX optimization, ASO.',
    image: appDevelopment,
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Online stores, mobile commerce, secure transactions.',
    image: eCommerce,
  },
  {
    title: 'Business Management',
    description: 'Streamlining operations, BPO, project management.',
    image: businessManagement,
  },
  {
    title: 'CRM & HR',
    description: 'Managing customer interactions, employee performance, HR solutions.',
    image: crmHr,
  },
  {
    title: 'Digital Marketing',
    description: 'Brand visibility, content strategies, online advertising.',
    image: digitalMarketing,
  },
  {
    title: 'E-Learning Systems',
    description: 'E-Learning platforms, training, skill development systems.',
    image: eLearning,
  },
  {
    title: 'Enterprise Connectivity',
    description: 'Improving communication, data sharing, systems integration.',
    image: enterpriseConnectivity,
  },
  {
    title: 'Logistics Support',
    description: 'Optimizing supply chain, package tracking, delivery.',
    image: logisticsSupport,
  },
  {
    title: 'IT Expertise',
    description: 'Niche IT services, technologies, and innovations.',
    image: itExpertise,
  },
];

const ServiceGrid = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Exploring IT Services
          </h2>
          <p className="text-gray-600 text-lg">
            What You Gain: Full Control Over What Belongs to You.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              isActive={index === 1} // Highlight the second card (Cloud Services)
            />
          ))}
        </div>

        {/* See All Services Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            See All Services
            <svg
              className="w-5 h-5 inline-block ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;