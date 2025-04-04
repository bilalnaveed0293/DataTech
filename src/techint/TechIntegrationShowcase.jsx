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

const TechIntegrationShowcase = () => {
  const integrations = [
    { name: "SAP", logo: sap, position: "left-[15%] top-[25%]" },
    { name: "Microsoft", logo: micro, position: "left-[28%] top-[20%]" },
    { name: "GitHub", logo: git, position: "left-[60%] top-[20%]" },
    { name: "Shopify", logo: shop, position: "left-[75%] top-[22%]" },
    { name: "Notion", logo: notion, position: "left-[85%] top-[25%]" },
    { name: "TensorFlow", logo: tf, position: "left-[35%] top-[35%]" },
    { name: "Google Drive", logo: gd, position: "left-[20%] top-[45%]" },
    { name: "ReactJS", logo: react1, position: "left-[50%] top-[45%]" },
    { name: "HubSpot", logo: hub, position: "left-[65%] top-[45%]" },
    { name: "Oracle", logo: oracle, position: "left-[80%] top-[40%]" },
    { name: "Python", logo: python, position: "left-[75%] top-[50%]" },
  ];

  return (
    <div className="relative w-full">
      {/* Top section with curved logos */}
      <div className="relative bg-white w-full h-[400px] overflow-hidden">
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

      {/* Bottom dark section */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center relative">
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-4">
            Essential Connect your favorite <br />
            tools with datatech.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Connect your favorite tools and find new Add-Ons.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium flex items-center mx-auto hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechIntegrationShowcase;
