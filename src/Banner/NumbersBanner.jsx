import React from 'react';

const NumbersBanner = () => {
  const stats = [
    {
      number: '+500k',
      description: 'Users Active / Month'
    },
    {
      number: '+38k',
      description: 'New Download / Month'
    },
    {
      number: '150',
      description: 'Operating countries'
    },
    {
      number: '4,000',
      description: 'Businesses trust on the world'
    }
  ];

  return (
    <div className="relative">
      {/* Top buttons */}
      {/* <div className="bg-gray-100 py-6 px-4 flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2">
          Get a Free Quote
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transform translate-y-px"
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="bg-white text-gray-800 border border-gray-200 px-6 py-3 rounded-md font-medium flex items-center gap-2">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 5.5C3 14.06 9.94 21 18.5 21C18.94 21 19.37 20.97 19.8 20.92C20.31 20.86 20.58 20.27 20.31 19.85C19.45 18.54 19 16.97 19 15.5C19 11.91 21.91 9 25.5 9C26.97 9 28.54 9.45 29.85 10.31C30.27 10.58 30.86 10.31 30.92 9.8C30.97 9.37 31 8.94 31 8.5C31 -0.06 24.06 -7 15.5 -7C6.94 -7 0 -0.06 0 8.5C0 11.29 0.87 13.89 2.57 17.36C2.74 17.7 2.86 18.08 2.86 18.5C2.86 18.83 2.74 19.15 2.57 19.43C2.2 19.97 1.63 20.8 1.42 20.94C1.2 21.08 1.08 21.18 1.04 21.25C0.97 21.37 0.97 21.5 1.05 21.71C1.11 21.79 1.21 21.89 1.46 21.95C1.76 22.01 2.38 22.05 3.11 21.96C5.19 21.74 7.92 20.89 10.27 18.89C11.88 19.63 13.65 20 15.5 20C17.42 20 19.25 19.61 20.91 18.83" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Our Help Center
        </button>
      </div> */}

      {/* Numbers section with background color #3754A1 */}
      <div className="bg-[#3754A1] py-16 px-4 relative overflow-hidden">
        {/* Decorative curved lines */}
        <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-10">
          <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
            <path d="M-300 0C-200 100 -100 200 0 300C100 400 200 500 300 600" stroke="white" strokeWidth="2" />
            <path d="M-280 0C-180 100 -80 200 20 300C120 400 220 500 320 600" stroke="white" strokeWidth="2" />
            <path d="M-260 0C-160 100 -60 200 40 300C140 400 240 500 340 600" stroke="white" strokeWidth="2" />
            <path d="M-240 0C-140 100 -40 200 60 300C160 400 260 500 360 600" stroke="white" strokeWidth="2" />
            <path d="M-220 0C-120 100 -20 200 80 300C180 400 280 500 380 600" stroke="white" strokeWidth="2" />
            <path d="M-200 0C-100 100 0 200 100 300C200 400 300 500 400 600" stroke="white" strokeWidth="2" />
            <path d="M-180 0C-80 100 20 200 120 300C220 400 320 500 420 600" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Heading and button */}
          <div className="flex justify-between items-start mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-md">
              Numbers Speaking for Themselves
            </h2>
            <button className="hidden md:flex items-center gap-2 border cursor-pointer border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
              Get a Quote
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform translate-y-px"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-white/20 mb-8"></div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-1">
                  {stat.number}
                </h3>
                <p className="text-white/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersBanner;