import React from "react";
import tax from "../assets/tax.png"; 
import handshake from "../assets/handshake.png";
import brj from "../assets/burjalarab.png";
import handcoin from "../assets/handcoin.png";

const ItSolutions = () => {
    // Reordered services to match Image 2
    const services = [
        {
            icon: tax,
            title: "Tax Optimization",
            description: "Save up to 48.4% of your income, maximizing long-term financial growth."
        },
        {
            icon: handshake,
            title: "Salary Security",
            description: "UAE's Wage Protection System ensures timely, hassle-free monthly payouts."
        },
        {
            icon: brj,
            title: "UAE Residency",
            description: "Gain legal status, tax-free income, and global market access for business growth."
        },
        {
            icon: handcoin,
            title: "Financial Freedom",
            description: "Enough resources to live life on your terms without financial stress."
        }
    ];

    return (
        <div className="text-center px-4 py-16 max-w-5xl mx-auto relative">
            <div className="mb-8">
                {/* Updated to WHAT WE OFFERS with two dots */}
                <p className="text-blue-600 font-medium text-sm tracking-wide bg-blue-50 inline-block py-2 px-5 rounded-full">•• WHAT WE OFFERS</p>
                <h2 className="text-5xl font-normal text-gray-800 mt-2">
                    The Leading <span className="font-bold text-gray-900">IT Solutions</span>
                    <br />
                    <span className="font-bold text-gray-900">Company</span> For You
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center h-72">
                        <div className="bg-blue-50 p-4 rounded-lg mb-2">
                            <img src={service.icon} alt={service.title} className="w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-xs mb-4">{service.description}</p>
                        <div className="mt-2">
                            <a href="#" className="inline-flex items-center text-[#3754A1] text-xs font-medium">
                                Learn More
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 -translate-x-14">
                <button className="bg-white shadow-md rounded-full p-3 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-14">
                <button className="bg-[#3754A1] text-white shadow-md rounded-full p-3 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ItSolutions;