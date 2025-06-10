import React, { useState } from "react";
import { ChevronDown, ArrowRight, Check } from "lucide-react";

// Assuming these images are available in the assets folder
import eligibilityImg from "../assets/Eligibility.png";
import agreementImg from "../assets/Agreement.png";
import workPermitImg from "../assets/Work Permit.png";
// Import arrow images
import arrowRight from "../assets/ok.png";
import arrowLeft from "../assets/ok1.png";

const ThreeStepProcess = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryOfResidence: "",
    natureOfServices: "",
    clientLocation: "",
    currentTaxes: "",
    travel: "",
    monthlyIncomeRange: "",
  });
  const [fadeIn, setFadeIn] = useState(true);
  const totalSteps = 4;

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle step navigation
  const nextStep = () => {
    if (formStep < totalSteps) {
      setFadeIn(false);
      setTimeout(() => {
        setFormStep(formStep + 1);
        setFadeIn(true);
      }, 300);
    }
  };

  const prevStep = () => {
    if (formStep > 0) {
      setFadeIn(false);
      setTimeout(() => {
        setFormStep(formStep - 1);
        setFadeIn(true);
      }, 300);
    }
  };
  const steps = [
    {
      title: "Eligibility Check",
      description:
        "We evaluate your profile and business model to ensure you're qualified for our UAE-based solutions.",
      image: eligibilityImg,
    },
    {
      title: "Legal Agreement",
      description:
        "A transparent, compliant agreement secures your path forward with confidence.",
      image: agreementImg,
    },
    {
      title: "Residency & Permit Setup",
      description:
        "We manage the full visa and work permit process — setting you up for success in the UAE and beyond.",
      image: workPermitImg,
    },
  ];

  const submitForm = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    nextStep(); // Move to success step
  };

  return (
    <div className="py-12 px-4 flex flex-col md:flex-col bg-gradient-to-l">
      {/* Steps Section */}
      <div className="w-full  bg-white p-12">
        {/* <div className="text-center mb-4">
          <span className="text-sm text-indigo-900 font-medium py-1 px-4 rounded-full bg-white inline-flex items-center gap-2">
            •• WORKING PROCESS
          </span>
        </div> */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
        </div>
        <div className="text-center mb-16 max-w-xl mx-auto">
          <p className="text-gray-600">
            Comprehensive Suite of Cutting-Edge IT Services.
          </p>
        </div>

        {/* Flow diagram with alternating curved arrows */}
        <div className="relative flex flex-row max-sm:flex-col items-center justify-center gap-10 md:gap-20">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative flex flex-col items-center max-w-[300px] mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4 w-20 h-20 flex items-center justify-center">
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {step.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <p className="text-gray-600">Need more help? Go to our <a href="#" className="text-indigo-900 hover:underline">Support Center</a></p>
        </div> */}
      </div>
      {/* Form Section - Now with steps */}
      <div className="bg-transparent p-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Let's Build A Future Together
          </h2>
          <p className="text-base text-gray-500 mb-6">
            We're here to simplify your business and help you take control of
            your financial future.
          </p>
        </div>

        {/* Progress tracker */}
        <div className="max-w-[52rem] mx-auto mb-8 px-2">
          <div className="flex justify-between mb-2">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center rounded-full w-8 h-8 text-xs font-medium transition-all duration-300
                  ${
                    index < formStep
                      ? "bg-[#3754A1] text-white"
                      : index === formStep
                      ? "bg-[#3754A1] text-white ring-4 ring-blue-100"
                      : "bg-gray-200 text-gray-600"
                  }`}
              >
                {index < formStep ? <Check size={16} /> : index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 h-1 mb-6 rounded-full overflow-hidden">
            <div
              className="bg-[#3754A1] h-full transition-all duration-500 ease-out"
              style={{ width: `${(formStep / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form steps container */}
        <div className="max-w-[52rem] mx-auto px-2">
          <div
            className={`transition-all duration-300 ${
              fadeIn
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-4"
            }`}
          >
            {/* Step 1: Basic Information */}
            {formStep === 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500 flex items-center">
                          AE <ChevronDown className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 58 5114267"
                        className="w-full pl-16 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location Information */}
            {formStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Location Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="countryOfResidence"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country of Residence
                    </label>
                    <select
                      id="countryOfResidence"
                      value={formData.countryOfResidence}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select your country</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="clientLocation"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Client's Location
                    </label>
                    <select
                      id="clientLocation"
                      value={formData.clientLocation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Where are your clients located?</option>
                      <option value="Primarily Local">Primarily Local</option>
                      <option value="Primarily International">
                        Primarily International
                      </option>
                      <option value="Mix of Local and International">
                        Mix of Local and International
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Business Information */}
            {formStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="natureOfServices"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nature of Services Offered
                    </label>
                    <select
                      id="natureOfServices"
                      value={formData.natureOfServices}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select service type</option>
                      <option value="IT Consulting">IT Consulting</option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Financial Services">
                        Financial Services
                      </option>
                      <option value="Creative Services">
                        Creative Services
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="currentTaxes"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Current Taxes
                    </label>
                    <select
                      id="currentTaxes"
                      value={formData.currentTaxes}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select tax range</option>
                      <option value="0-10%">0-10%</option>
                      <option value="11-20%">11-20%</option>
                      <option value="21-30%">21-30%</option>
                      <option value="31-40%">31-40%</option>
                      <option value="41%+">41%+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Financial Information */}
            {formStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Financial Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="travel"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Travel
                    </label>
                    <select
                      id="travel"
                      value={formData.travel}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">How often do you travel?</option>
                      <option value="Rarely">Rarely</option>
                      <option value="Several times a year">
                        Several times a year
                      </option>
                      <option value="Monthly">Monthly</option>
                      <option value="Weekly">Weekly</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="monthlyIncomeRange"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Monthly Income Range
                    </label>
                    <select
                      id="monthlyIncomeRange"
                      value={formData.monthlyIncomeRange}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select income range</option>
                      <option value="$0-$5,000">$0-$5,000</option>
                      <option value="$5,001-$10,000">$5,001-$10,000</option>
                      <option value="$10,001-$20,000">$10,001-$20,000</option>
                      <option value="$20,001-$50,000">$20,001-$50,000</option>
                      <option value="$50,001+">$50,001+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message */}
            {formStep === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your information has been submitted successfully. Our team
                  will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormStep(0);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      countryOfResidence: "",
                      natureOfServices: "",
                      clientLocation: "",
                      currentTaxes: "",
                      travel: "",
                      monthlyIncomeRange: "",
                    });
                  }}
                  className="text-[#3754A1] hover:underline"
                >
                  Start another submission
                </button>
              </div>
            )}

            {/* Navigation buttons */}
            {formStep < totalSteps && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    formStep === 0
                      ? "opacity-0 cursor-default"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                  disabled={formStep === 0}
                >
                  Back
                </button>
                {formStep < totalSteps - 1 ? (
                  <button
                    onClick={nextStep}
                    className="bg-[#3754A1] hover:bg-blue-800 text-white px-6 py-2 rounded-lg flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={submitForm}
                    className="bg-[#3754A1] hover:bg-blue-800 text-white px-6 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepProcess;
