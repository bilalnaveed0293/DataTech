import React from 'react';

const WhyChooseDataTech = () => {
  const benefits = [
    {
      icon: "🌍",
      title: "Global Financial Access",
      description: "Access international banking and payment systems with ease."
    },
    {
      icon: "🧩",
      title: "Business Made Simple",
      description: "Streamlined processes that remove complexity from global operations."
    },
    {
      icon: "⚙️",
      title: "Tech-Driven Results",
      description: "Leverage cutting-edge technology for maximum efficiency and growth."
    },
    {
      icon: "🤝",
      title: "End-to-End Partnership",
      description: "Complete support from initial setup through ongoing operations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Data Tech?
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Discover the Benefits That Drive Real Growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-[#3754A1] mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-[#3754A1] hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseDataTech;