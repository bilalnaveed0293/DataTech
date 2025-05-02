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
