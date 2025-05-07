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
import openai from "../assets/openai.png";

const TechIntegrationShowcase = () => {
  // Define tech logos with their positions
  const techLogos = [
    { name: "SAP", logo: sap, left: "12%", top: "10%" },
    { name: "Microsoft", logo: micro, left: "30%", top: "10%" },
    { name: "AWS", logo: aws, left: "45%", top: "10%" },
    { name: "OpenAI", logo: openai, left: "55%", top: "25%" },
    { name: "GitHub", logo: git, left: "63%", top: "10%" },
    { name: "Shopify", logo: shop, left: "78%", top: "10%" },
    { name: "Notion", logo: notion, left: "90%", top: "10%" },
    { name: "Google Drive", logo: gd, left: "21%", top: "35%" },
    { name: "TensorFlow", logo: tf, left: "35%", top: "25%" },
    { name: "ReactJS", logo: react1, left: "52%", top: "35%" },
    { name: "HubSpot", logo: hub, left: "65%", top: "35%" },
    { name: "Oracle", logo: oracle, left: "75%", top: "30%" },
    { name: "Python", logo: python, left: "86%", top: "35%" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Top white section with logos and vertical lines */}
      <div className="relative bg-white w-full" style={{ height: "320px" }}>
        {/* Vertical lines that extend through both sections */}
        {techLogos.map((item, index) => (
          <div
            key={`line-${index}`}
            style={{
              position: "absolute",
              left: item.left,
              top: `calc(${item.top} + 28px)`,
              width: "1px",
              height: "400px", // Extra long to extend into dark section
              backgroundColor: "#E5E7EB", // Very light gray
              transform: "translateX(-50%)",
              zIndex: 1
            }}
          />
        ))}

        {/* Tech logos and labels */}
        {techLogos.map((item, index) => (
          <div
            key={`logo-${index}`}
            style={{
              position: "absolute",
              left: item.left,
              top: item.top,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: "translateX(-50%)",
              zIndex: 3
            }}
          >
            <div style={{
              backgroundColor: "white",
              padding: "12px",
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              marginBottom: "4px",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={item.logo}
                alt={item.name}
                style={{
                  objectFit: "contain",
                  width: "32px",
                  height: "32px"
                }}
              />
            </div>
            <div style={{
              fontSize: "0.75rem",
              fontWeight: "500",
              color: "#1F2937"
            }}>
              {item.name}
            </div>
            <div style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#3B82F6",
              borderRadius: "9999px",
              marginTop: "4px"
            }}></div>
          </div>
        ))}

        {/* Horizontal line that spans the width with a gap in the middle */}
        <div style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "1px",
          backgroundColor: "#111827",
          zIndex: 2
        }}>
          {/* Creating the gap by overlaying a white div */}
          <div style={{
            position: "absolute",
            left: "50%",
            width: "180px",
            height: "1px",
            backgroundColor: "white",
            transform: "translateX(-50%)"
          }}></div>
        </div>
      </div>

      {/* Bottom dark navy section */}
      <div className="relative bg-gray-900 w-full" style={{ height: "100px" }}>
        {/* Continuation of vertical lines in the dark section */}
        {techLogos.map((item, index) => (
          <div
            key={`bottom-line-${index}`}
            style={{
              position: "absolute",
              left: item.left,
              top: "0",
              width: "1px",
              height: "60px", // Extends partially into the dark area
              backgroundColor: "#374151", // Slightly lighter gray for dark bg
              transform: "translateX(-50%)",
              zIndex: 1
            }}
          />
        ))}

        {/* Datatech logo circle overlapping both sections */}
        <div style={{
          position: "absolute",
          left: "50%",
          top: "-60px", // Positioned to overlap the two sections
          width: "120px",
          height: "120px",
          backgroundColor: "white",
          borderRadius: "9999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          transform: "translateX(-50%)",
          zIndex: 10
        }}>
          <img 
            src={datatechLogo} 
            alt="Datatech" 
            style={{
              width: "80px",
              height: "auto"
            }}
          />
        </div>
      </div>

      {/* Main content section */}
      <div className="bg-gray-900 text-white py-16 px-4 text-center">
        <div className="mt-8">
          <h2 className="text-4xl font-bold mb-2">
            Essential Connect your favorite
            <br />
            tools with datatech.
          </h2>
          <p className="text-md text-gray-300 mb-6">
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