import React from "react";
import react1 from "../assets/react.png";
import micro from "../assets/micro.png";
import tf from "../assets/tf.png";
import sap from "../assets/sap.png";
import notion from "../assets/notion.png";
import git from "../assets/git.png";
import shop from "../assets/shop.png";
import gd from "../assets/gd.png";
import hub from "../assets/hs.png";
import oracle from "../assets/oracle.png";
import python from "../assets/py.png";
import aws from "../assets/aws.png"; // You'll need to add this asset
import datatech from "../assets/datatech logo.png"; // You'll need to add this asset

const TechIntegrationShowcase = () => {
  const integrations = [
    { name: "SAP", logo: sap, position: "left-[12%] top-[30%]" },
    { name: "Microsoft", logo: micro, position: "left-[28%] top-[18%]" },
    { name: "AWS", logo: aws, position: "left-[37%] top-[25%]" },
    { name: "GitHub", logo: git, position: "left-[60%] top-[15%]" },
    { name: "Shopify", logo: shop, position: "left-[70%] top-[20%]" },
    { name: "Notion", logo: notion, position: "left-[83%] top-[18%]" },
    { name: "TensorFlow", logo: tf, position: "left-[32%] top-[40%]" },
    { name: "Google Drive", logo: gd, position: "left-[22%] top-[50%]" },
    { name: "ReactJS", logo: react1, position: "left-[45%] top-[50%]" },
    { name: "HubSpot", logo: hub, position: "left-[60%] top-[50%]" },
    { name: "Oracle", logo: oracle, position: "left-[65%] top-[35%]" },
    { name: "Python", logo: python, position: "left-[75%] top-[50%]" },
    ];

  return (
    <div className="relative w-full">
      {/* Top section with curved logos */}
      <div className="relative bg-gray-50 w-full h-[350px] overflow-hidden">
        {/* Logo items */}
        {integrations.map((item, index) => (
          <div key={index} className={`absolute flex flex-col items-center ${item.position}`}>
            <div className="bg-white p-3 rounded-full shadow-md mb-2 w-16 h-16 flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="object-contain w-10 h-10"
              />
            </div>
            <div className="text-xs font-medium text-gray-800">{item.name}</div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
          </div>
        ))}
      </div>

      {/* Datatech circular logo overlapping sections */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[300px] z-10">
        <div className="bg-white p-4 rounded-full shadow-lg w-44 h-35 flex items-center justify-center">
          <img src={datatech} alt="datatech" className="w-full h-full" />
        </div>
      </div>

      {/* Bottom dark section */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center relative">
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4">
            Essential Connect your favorite <br />
            tools with datatech.
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Connect your favorite tools and find new Add-Ons.
          </p>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium flex items-center mx-auto hover:bg-gray-100 transition-colors">
            Get Started <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechIntegrationShowcase;