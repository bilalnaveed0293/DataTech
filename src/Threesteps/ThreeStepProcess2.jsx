import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stepper from "../assets/sign.jpg";
import stepper1 from "../assets/deal.jpg";
import stepper2 from "../assets/cont.jpg";
const steps = [
  {
    id: 1,
    title: "Eligibility",
    description:
      "We evaluate your profile and business model to ensure you’re qualified for our UAE-based solutions.",
    image: stepper,
  },
  {
    id: 2,
    title: "Agreement",
    description:
      "A transparent, compliant agreement secures your path forward with confidence.",
    image: stepper1,
  },
  {
    id: 1,
    title: "Work Permit",
    description:
      "We manage the full visa and work permit process — setting you up for success in the UAE and beyond.",
    image: stepper2,
  },
];

const ThreeStepProcess2 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // changed this line
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-2">
        <span className="text-lg text-[#4A2B2B] font-medium py-1 px-4 rounded-full bg-[#ECF2FC] inline-flex items-center gap-2">
          <span className="w-1 h-1 bg-[#110834] rounded-full"></span>
          HOW IT GOES?
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-6xl font-medium text-gray-800">Our 3 Step Process</h2>
      </div>

      {/* Subheader */}
      <div className="text-center mb-16 max-w-xs mx-auto">
        <p className="text-gray-600 font-medium text-xs">
          Seamless IT transformation with DataTech—efficient, secure,
          and built to scale. Explore our 6-step process today
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            data-aos="fade-up"
          >
            {step.id === 1 && (
              <img
                src={step.image}
                alt={step.title}
                className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
              />
            )}
            {step.id === 2 && (
              <img
                src={step.image}
                alt={step.title}
                className="w-full md:w-1/2 h-96 rounded-lg shadow-lg"
              />
            )}

            <div className="md:w-1/2 px-6 mt-6 md:mt-0">
              <h3 className="text-2xl font-bold text-[#3754A1] mb-2">
                0{index + 1}. {step.title}
              </h3>
              <p className="text-[#3754A1] text-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeStepProcess2;
