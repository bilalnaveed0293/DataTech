import React, { useState } from 'react';

const ServiceCard = ({ title, description, blueImage, whiteImage, isActive = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg shadow-md flex flex-col justify-between h-full bg-[#ECF2FC] hover:bg-[#3754A1] hover:text-white transition-colors duration-300`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10">
          <img
            src={hovered ? whiteImage : blueImage}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        {isActive && (
          <svg
            className="w-6 h-6"
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
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className={`text-xs`}>
          {description}
        </p>
      </div>
      {!isActive && (
        <div className="mt-4 text-right">
          <span className="font-semibold">
            Learn More &gt;
          </span>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
