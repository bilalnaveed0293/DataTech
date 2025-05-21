import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      question:
        "How can <span style='color:#3754A1;'>AI solutions</span> reduce my business costs?",
      answer:
        "Our AI solutions automate repetitive tasks, optimize workflows, and increase productivity while reducing staffing needs. Clients typically see a 40% reduction in operational costs and a 3x increase in productivity through our customized AI implementations.",
    },
    {
      question:
        "What are the benefits of working with <span style='color:#3754A1;'>Data Tech</span>?",
      answer:
        "Data Tech offers multiple benefits: UAE residency with zero personal income tax, comprehensive health insurance, exclusive banking services, financial independence strategies, and AI-driven business solutions to maximize your earnings and growth potential.",
    },
    {
      question:
        "How does your <span style='color:#3754A1;'>invoicing facility</span> work?",
      answer:
        "As a Dubai-based umbrella company, we handle all invoicing for consultants. You can invoice clients through us for a small fee without setting up your own company, dealing with VAT returns, managing offices, or handling end-of-year accounts and related complexities.",
    },
    {
      question:
        "Can I get <span style='color:#3754A1;'>UAE residency</span> through your services?",
      answer:
        "Yes, as an established company, we provide immediate access to UAE residency when you work with us as a consultant. We handle the entire process from visa applications to biometric screenings, giving you access to tax-free income and global mobility benefits.",
    },
    {
      question:
        "What <span style='color:#3754A1;'>banking services</span> do you offer?",
      answer:
        "Within six months of joining Data Tech, you gain access to premium UAE banking services including property loans, car loans, credit cards, multi-currency accounts, high-end financial management, and seamless international transactions.",
    },
    {
      question:
        "Do you provide <span style='color:#3754A1;'>IT contractors</span> for projects?",
      answer:
        "Yes, we provide specialized IT consultants for contracts of any scale. Whether you need support for new projects or wish to externalize part of your existing work, our network of expert contractors can seamlessly integrate with your teams and workflows.",
    },
    {
      question:
        "What types of <span style='color:#3754A1;'>AI agents</span> can you create?",
      answer:
        "We develop personalized AI agents for customer service, data analysis, content creation, inventory management, financial forecasting, and administrative tasks. These agents are trained on your specific business requirements and industry knowledge.",
    },
    {
      question:
        "How do you help with <span style='color:#3754A1;'>tax optimization</span>?",
      answer:
        "Through our Dubai-based structure, we help you legally optimize taxes with zero personal income tax. We provide strategic financial planning, tax-free financial structures, and offshore banking services to maximize your take-home earnings.",
    },
    {
      question:
        "What is your <span style='color:#3754A1;'>eligibility criteria</span>?",
      answer:
        "Eligibility depends on your financial background, business type, the nature of services offered, client locations, and compliance with international regulations. Our initial consultation helps determine if our solutions are the right fit for your circumstances.",
    },
    {
      question:
        "How long does your <span style='color:#3754A1;'>process</span> take?",
      answer:
        "Our three-step process includes: 1) Eligibility Check, 2) Legal Agreement, and 3) Residency & Permit Setup. The entire process can be completed efficiently, with most clients experiencing significant improvements within 6-12 months of starting.",
    },
    {
      question:
        "Can I <span style='color:#3754A1;'>operate globally</span> with your services?",
      answer:
        "Absolutely. Our solutions enable you to work with international clients and receive payments worldwide without the cost or complexity of starting your own business. You can operate globally while enjoying all the benefits of UAE residency and tax advantages.",
    },
  ];

  const [openItems, setOpenItems] = useState({});

  const toggleFAQ = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const firstColumnFaqs = faqs.slice(0, 5);
  const secondColumnFaqs = faqs.slice(5);

  return (
    <div className="bg-[#CEDAFA] py-24 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-9">
        <p className="text-[#3754A1] font-semibold tracking-wide">••• FAQs</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ask us anything
        </h2>
        <p className="text-gray-600 mt-2">
          Have any questions? We're here to assist you.
        </p>
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {firstColumnFaqs.map((faq, index) => (
            <div
              key={`col1-${index}`}
              className="bg-white shadow-md rounded-lg transition-all duration-300"
            >
              <button
                className="w-full text-left cursor-pointer flex justify-between items-center p-3.5 font-semibold text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(`col1-${index}`)}
              >
                <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                <span className="text-xs font-bold">
                  {openItems[`col1-${index}`] ? "▲" : "▼"}
                </span>
              </button>
              {openItems[`col1-${index}`] && (
                <div className="p-4 text-gray-700 text-xs border-t border-gray-200 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {secondColumnFaqs.map((faq, index) => (
            <div
              key={`col2-${index}`}
              className="bg-white shadow-md rounded-lg transition-all duration-300 "
            >
              <button
                className=" cursor-pointer w-full text-left flex justify-between items-center p-3.5 font-semibold text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(`col2-${index}`)}
              >
                <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                <span className="text-xs">
                  {openItems[`col2-${index}`] ? "▲" : "▼"}
                </span>
              </button>
              {openItems[`col2-${index}`] && (
                <div className="p-4 text-gray-700 border-t border-gray-200 transition-all duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
