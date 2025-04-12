import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    { question: "What are the key benefits of using <span style='color:#3754A1;'>Data Tech</span>?", answer: "Comprehensive Health Insurance, No Personal Income Tax, Financial Independence, Exclusive Banking Services." },
    { question: "What features does <span style='color:#3754A1;'>Data Tech</span> offer?", answer: "Advanced analytics, secure transactions, and seamless integrations with financial services." },
    { question: "How do your services work?", answer: "We provide a tailored approach to maximize financial growth and independence." },
    { question: "Why do I need <span style='color:#3754A1;'>Data Tech</span>?", answer: "To gain financial freedom, avoid unnecessary taxation, and access premium banking services." },
    { question: "What strategies do you use?", answer: "We use data-driven strategies, global compliance frameworks, and smart investment techniques." },
    { question: "How can you help with UAE Residency?", answer: "We assist with documentation, legal frameworks, and financial structuring for smooth residency acquisition." },
    { question: "What is the eligibility criteria for our services?", answer: "Eligibility depends on financial background, investment interests, and compliance with international laws." },
    { question: "How to maximize your take-home earnings?", answer: "By leveraging tax-free financial structures, optimizing investments, and using offshore banking services." },
    { question: "How long does it take to see results?", answer: "Results vary, but most clients experience significant improvements within 6-12 months." },
    { question: "Do you offer ongoing support?", answer: "Yes, we provide continuous guidance, updates on financial trends, and 24/7 customer support." },
    { question: "Do you work with businesses in my industry?", answer: "We support various industries, including tech, finance, healthcare, and more." },
  ];

  const [openItems, setOpenItems] = useState({});

  const toggleFAQ = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const firstColumnFaqs = faqs.slice(0, 5);
  const secondColumnFaqs = faqs.slice(5);

  return (
    <div className="bg-[#CEDAFA] min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-9">
        <p className="text-[#3754A1] font-semibold tracking-wide">••• FAQs</p>
        <h2 className="text-5xl font-normal text-gray-900 mt-2">Ask us anything</h2>
        <p className="text-gray-600 mt-2">Have any questions? We're here to assist you.</p>
      </div>

      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          {firstColumnFaqs.map((faq, index) => (
            <div key={`col1-${index}`} className="bg-white shadow-md rounded-lg transition-all duration-300">
              <button className="w-full text-left flex justify-between items-center p-3.5 font-semibold text-gray-900 focus:outline-none" onClick={() => toggleFAQ(`col1-${index}`)}>
                <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                <span className="text-xs font-bold">{openItems[`col1-${index}`] ? "▲" : "▼"}</span>
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
            <div key={`col2-${index}`} className="bg-white shadow-md rounded-lg transition-all duration-300">
              <button className="w-full text-left flex justify-between items-center p-3.5 font-semibold text-gray-900 focus:outline-none" onClick={() => toggleFAQ(`col2-${index}`)}>
                <span dangerouslySetInnerHTML={{ __html: faq.question }} />
                <span className="text-xs">{openItems[`col2-${index}`] ? "▲" : "▼"}</span>
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
