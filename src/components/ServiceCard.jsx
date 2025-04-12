import React from 'react';

const ServiceCard = ({ title, description, image, isActive = false }) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md flex  flex-col justify-between h-full hover:bg-[#3754A1] hover:text-white 
        bg-[#ECF2FC]
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10">
          <img src={image} alt={title} className="w-full h-full object-contain hover:text-white" />
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
        <p className={`text-sm 'hover:text-white/80' `}>
          {description}
        </p>
      </div>
      {!isActive && (
        <div className="mt-4 text-right hover:text-white">
          <span className="text-[#3754A1 font-semibold">
            Learn More &gt;
          </span>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;