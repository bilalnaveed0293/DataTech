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
import oracle from "../assets/oracle1.png";
import python from "../assets/py.png";
import aws from "../assets/aws1.png";
import datatechLogo from "../assets/datatech logo.png";
// Import OpenAI logo
import openai from "../assets/openai.png"; 

const TechIntegrationShowcase = () => {
  const integrations = [
    { name: "SAP", logo: sap, position: "left-[12%] top-[10%]" },
    { name: "Microsoft", logo: micro, position: "left-[30%] top-[10%]" },
    { name: "AWS", logo: aws, position: "left-[45%] top-[10%]" },
    { name: "OpenAI", logo: openai, position: "left-[55%] top-[25%]" }, // Added OpenAI
    { name: "GitHub", logo: git, position: "left-[63%] top-[10%]" },
    { name: "Shopify", logo: shop, position: "left-[78%] top-[10%]" },
    { name: "Notion", logo: notion, position: "left-[90%] top-[10%]" },
    { name: "Google Drive", logo: gd, position: "left-[21%] top-[35%]" },
    { name: "TensorFlow", logo: tf, position: "left-[35%] top-[25%]" },
    { name: "ReactJS", logo: react1, position: "left-[52%] top-[35%]" },
    { name: "HubSpot", logo: hub, position: "left-[65%] top-[35%]" },
    { name: "Oracle", logo: oracle, position: "left-[75%] top-[30%]" },
    { name: "Python", logo: python, position: "left-[86%] top-[35%]" },
  ];

  // Define the starting point (Datatech logo center)
  const datatechCenter = { x: 50, y: 100 }; // left: 50%, bottom: 0px (relative to the top section height)

  // Define endpoints for each tech logo (bottom center of each logo, including the dot)
  const techEndpoints = integrations.map((item) => {
    const leftMatch = item.position.match(/left-\[(\d+)%\]/);
    const topMatch = item.position.match(/top-\[(\d+)%\]/);
    const left = parseInt(leftMatch ? leftMatch[1] : 0);
    const top = parseInt(topMatch ? topMatch[1] : 0);
    // Logo height + dot + margin
    const yOffset = top + 15; // Reduced offset for more compact layout
    return { x: left, y: yOffset };
  });

  // Generate a straight vertical line path from each tech logo to Datatech logo
  const generateVerticalPath = (endPoint) => {
    const start = datatechCenter;
    const end = endPoint;
    
    // Create a direct vertical path with minimal curve
    return `M ${end.x}% ${end.y}% L ${end.x}% ${Math.min(end.y + 40, start.y - 10)}% 
            Q ${end.x}% ${start.y - 5}, ${start.x}% ${start.y}%`;
  };

  return (
    <div className="relative w-full">
      {/* Top section with logos */}
      <div className="relative bg-gray-50 w-full h-[300px]"> {/* Reduced height for more compact layout */}
        {/* Vertical lines from each tech logo to Datatech */}
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          {techEndpoints.map((endPoint, index) => (
            <path
              key={index}
              d={generateVerticalPath(endPoint)}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* Logo items */}
        {integrations.map((item, index) => (
          <div key={index} className={`absolute flex flex-col items-center ${item.position}`}>
            <div className="bg-white p-3 rounded-full shadow-md mb-1 w-14 h-14 flex items-center justify-center">
              <img
                src={item.logo}
                alt={item.name}
                className="object-contain w-8 h-8"
              />
            </div>
            <div className="text-xs font-medium text-gray-800">{item.name}</div>
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
          </div>
        ))}

        {/* Datatech logo circle in the middle bottom */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-72px] bg-white rounded-full w-36 h-36 flex items-center justify-center shadow-lg z-10">
          <img src={datatechLogo} alt="Datatech" className="w-28 h-auto" />
        </div>
      </div>

      {/* Bottom dark section */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center relative"> {/* Reduced padding */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-2"> {/* Reduced text size and margin */}
            Essential Connect your favorite
            <br />
            tools with datatech.
          </h2>
          <p className="text-md text-gray-300 mb-6"> {/* Added subtitle as shown in Image 2 */}
            Connect your favorite tools and find new Add-Ons.
          </p>
          <button className="hover:bg-white border border-white cursor-pointer hover:text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 mx-auto bg-transparent transition-colors">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechIntegrationShowcase;