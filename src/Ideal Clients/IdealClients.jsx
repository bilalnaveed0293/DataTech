import React from 'react';

const IdealClients = () => {
  const clientTypes = [
    {
      type: "Digital Nomads",
      description: "Work from anywhere while optimizing your global income.",
      icon: "🌐"
    },
    {
      type: "Remote Employees",
      description: "Enhance your employment structure with international advantages.",
      icon: "💻"
    },
    {
      type: "Freelancers",
      description: "Structure your business for maximum financial benefit.",
      icon: "✏️"
    },
    {
      type: "Entrepreneurs",
      description: "Scale globally with optimized business operations.",
      icon: "🚀"
    },
    {
      type: "Consultants",
      description: "Leverage international opportunities for your expertise.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Ideal Clients
          </h2>
          <p className="text-xl text-gray-600 font-medium mb-6">
            Built for Globally Ambitious Professionals
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to maximize your income or operate border-free, 
            Data Tech is for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clientTypes.map((client, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 flex items-start"
            >
              <div className="text-3xl mr-4 bg-[#3754A1] bg-opacity-10 text-[#3754A1] h-12 w-12 flex items-center justify-center rounded-full">
                {client.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{client.type}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-[#3754A1] text-[#3754A1] hover:bg-[#3754A1] hover:text-white font-medium py-3 px-8 rounded-md transition duration-300">
            See If You Qualify
          </button>
        </div>
      </div>
    </section>
  );
};

export default IdealClients;