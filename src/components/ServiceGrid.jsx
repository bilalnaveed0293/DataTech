import React from 'react';
import ServiceCard from './ServiceCard';

// Import your PNG images
import artificialIntelligence1 from '../assets/aiwhite.png';
import cloudIt1 from '../assets/cloudwhite.png';
import appDevelopment1 from '../assets/appdevwhite.png';
import eCommerce1 from '../assets/ecomwhite.png';
import businessManagement1 from '../assets/businessmanagement.png';
import crmHr1 from '../assets/hrwhite.png';
import digitalMarketing1 from '../assets/digmarkwhite.png';
import eLearning1 from '../assets/elearnwhite.png';
import enterpriseConnectivity1 from '../assets/econwhite.png';
import logisticsSupport1 from '../assets/logisticsupport.png';
import itExpertise1 from '../assets/itexp.png';

import artificialIntelligence from '../assets/aiblue.png';
import cloudIt from '../assets/cloudblue.png';
import appDevelopment from '../assets/appdevblue.png';
import eCommerce from '../assets/ecomblue.png';
import bmblue from '../assets/bmblue.png';
import bmwhite from '../assets/bmwhite.png';
import crmHr from '../assets/hrblue.png';
import digitalMarketing from '../assets/digmarkblue.png';
import eLearning from '../assets/elearnblue.png';
import enterpriseConnectivity from '../assets/econblue.png';
import logblue from '../assets/logblue.png';
import logwhite from '../assets/logwhite.png';
import itblue from '../assets/itblue.png';
import itwhite from '../assets/itwhite.png';
const services = [
  {
    title: 'Artificial Intelligence & Data Analytics',
    description: 'Automating decisions, predictive insights, data analysis.',
    blueImage: artificialIntelligence,
    whiteImage: artificialIntelligence1,
  },
  {
    title: 'Cloud & IT Infrastructure Services',
    description: 'Secure cloud storage, IT support, ERP solutions.',
    blueImage: cloudIt,
    whiteImage: cloudIt1,
  },
  {
    title: 'App Development',
    description: 'Web, mobile apps, UI/UX optimization, ASO.',
    blueImage: appDevelopment,
    whiteImage: appDevelopment1,
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Online stores, mobile commerce, secure transactions.',
    blueImage: eCommerce,
    whiteImage: eCommerce1,
  },
  {
    title: 'Business Management',
    description: 'Streamlining operations, BPO, project management.',
    blueImage: bmblue,
    whiteImage: bmwhite,
  },
  {
    title: 'CRM & HR',
    description: 'Managing customer interactions, employee performance, HR solutions.',
    blueImage: crmHr,
    whiteImage: crmHr1,
  },
  {
    title: 'Digital Marketing',
    description: 'Brand visibility, content strategies, online advertising.',
    blueImage: digitalMarketing,
    whiteImage: digitalMarketing1,
  },
  {
    title: 'E-Learning Systems',
    description: 'E-Learning platforms, training, skill development systems.',
    blueImage: eLearning,
    whiteImage: eLearning1,
  },
  {
    title: 'Enterprise Connectivity',
    description: 'Improving communication, data sharing, systems integration.',
    blueImage: enterpriseConnectivity,
    whiteImage: enterpriseConnectivity1,
  },
  {
    title: 'Logistics Support',
    description: 'Optimizing supply chain, package tracking, delivery.',
    blueImage: logblue,
    whiteImage: logwhite
  },
  {
    title: 'IT Expertise',
    description: 'Niche IT services, technologies, and innovations.',
    blueImage: itblue,
    whiteImage: itwhite,
  },
];

const ServiceGrid = () => {
  // Split services into three rows: 4, 3, 4
  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4, 7);
  const thirdRow = services.slice(7, 11);

  const renderCards = (row, keyOffset = 0) =>
    row.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        description={service.description}
        blueImage={service.blueImage}
        whiteImage={service.whiteImage}
        isHighlighted={index === 0}
      />

    ));

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Power Your Business with Smart, Scalable Tech Solutions
          </h2>
          <p className="text-gray-600 text-lg">
          Unlock the full benefits of global finance, exclusive banking, and smart tech — with Data Tech.
          </p>
        </div>

        {/* Custom Grid Layout */}
        <div className="space-y-6">
          {/* First Row: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer max-w-5xl mx-auto text-xs">
            {renderCards(firstRow)}
          </div>

          {/* Second Row: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer mx-auto max-w-3xl text-xs">
            {renderCards(secondRow, 4)}
          </div>

          {/* Third Row: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer max-w-5xl mx-auto text-xs">
            {renderCards(thirdRow, 7)}
          </div>
        </div>

        {/* See All Services Button */}
        {/* <div className="text-center mt-12">
          <button className="text-gray-900 bg-[#CFDFFF] px-8 py-3 rounded-full font-semibold hover:bg-[#3754A1] hover:text-white transition cursor-pointer text-xs">
            See All Services
            <svg
              className="w-3 h-3 inline-block ml-2"
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
        </div> */}
      </div>
    </div>
  );
};

export default ServiceGrid;
