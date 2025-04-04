import React from 'react';

const ServiceCard = ({ title, description, image, isActive = false }) => {
  return (
    <div 
      className={`p-6 rounded-lg shadow-md flex flex-col justify-between h-full 
        ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10">
          <img src={image} alt={title} className="w-full h-full object-contain" />
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
        <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      {!isActive && (
        <div className="mt-4 text-right">
          <span className="text-blue-600 hover:text-blue-700 font-semibold">
            Learn More &gt;
          </span>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;