import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stepper from "../assets/3stepman.png";

const steps = [
  {
    title: "Eligibility",
    description:
      "We evaluate your profile and business model to ensure you’re qualified for our UAE-based solutions.",
    image: stepper,
  },
  {
    title: "Agreement",
    description:
      "A transparent, compliant agreement secures your path forward with confidence.",
    image: stepper,
  },
  {
    title: "Work Permit",
    description:
      "We manage the full visa and work permit process — setting you up for success in the UAE and beyond.",
    image: stepper,
  },
];

const ThreeStepProcess2 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // changed this line
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-16 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 px-6 mt-6 md:mt-0">
              <h3 className="text-2xl font-bold text-[#093431] mb-2">
                0{index + 1}. {step.title}
              </h3>
              <p className="text-gray-700 text-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeStepProcess2;
