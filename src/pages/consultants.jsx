import React, { useState } from "react";
import {
  FaUserTie,
  FaCode,
  FaCloud,
  FaDatabase,
  FaArrowRight,
  FaCheck,
  FaClock,
  FaCalendarAlt,
  FaUsers,
  FaLaptopCode,
  FaMobile,
  FaShieldAlt,
  FaNetworkWired,
  FaChartBar,
  FaGraduationCap,
  FaCertificate,
  FaGlobeAmericas,
  FaHandshake,
  FaRocket,
  FaCogs,
  FaBuilding,
  FaMoneyBill,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import coin1 from "../assets/coin1.mp4";
import JoinToExplore from "../JoinToExplore";

const ConsultantServicesPage = () => {
  window.scrollTo(0, 0);

  const [formData, setFormData] = useState({
    projectType: "",
    skillsRequired: "",
    projectDuration: "",
    engagementType: "",
    budget: "",
    projectDescription: "",
    urgency: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    companyName: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultant hire form submitted:", formData);
    setSubmitted(true);
  };

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative min-h-[35rem] sm:min-h-[35rem] md:min-h-[38rem] lg:min-h-screen xl:min-h-screen 2xl:min-h-screen flex flex-col items-start text-white justify-center text-left px-2 sm:px-4 md:px-6 ">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={coin1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaUserTie className="text-[#c7d2fe] text-5xl" />
              <span className="bg-white text-[#6366f1] bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                EXPERT IT CONSULTANTS
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Access <span className="text-[#c7d2fe]">Top-Tier</span> IT Talent
            </h1>

            <p className="text-md text-white text-opacity-90 mb-8 leading-relaxed">
              Connect with vetted IT specialists for your projects. Whether
              you're a company needing technical expertise or an IT professional
              looking to subcontract work, our global network of expert
              consultants provides flexible solutions for daily support, weekly
              consultations, or monthly engagements to accelerate your success.
            </p>

            <p className="text-md text-white text-opacity-90 mb-6 leading-relaxed">
              For IT professionals and consultancies, we offer seamless
              subcontracting opportunities that allow you to scale your capacity
              without the overhead. Partner with us to access additional
              projects, specialized expertise, or handle overflow work while
              maintaining your client relationships.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-white text-opacity-80">
                  Expert Consultants
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24h</div>
                <div className="text-sm text-white text-opacity-80">
                  Average Response
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">95%</div>
                <div className="text-sm text-white text-opacity-80">
                  Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Expertise Areas Section
  const ExpertiseAreasSection = () => {
    const expertiseAreas = [
      {
        icon: <FaCode className="w-8 h-8 text-[#6366f1]" />,
        title: "Software Development",
        description:
          "Full-stack developers, mobile app specialists, and custom software architects.",
        skills: [
          "React/Angular/Vue.js",
          "Node.js/Python/Java",
          "Mobile Development",
          "API Integration",
        ],
      },
      {
        icon: <FaCloud className="w-8 h-8 text-[#6366f1]" />,
        title: "Cloud & DevOps",
        description:
          "Cloud architects, DevOps engineers, and infrastructure specialists.",
        skills: [
          "AWS/Azure/GCP",
          "Docker/Kubernetes",
          "CI/CD Pipelines",
          "Infrastructure as Code",
        ],
      },
      {
        icon: <FaDatabase className="w-8 h-8 text-[#6366f1]" />,
        title: "Data & Analytics",
        description:
          "Data scientists, analysts, and database specialists for insights-driven solutions.",
        skills: [
          "Data Science/ML",
          "Business Intelligence",
          "Database Design",
          "Analytics Platforms",
        ],
      },
      {
        icon: <FaShieldAlt className="w-8 h-8 text-[#6366f1]" />,
        title: "Cybersecurity",
        description:
          "Security experts, penetration testers, and compliance specialists.",
        skills: [
          "Security Auditing",
          "Penetration Testing",
          "Compliance (SOC2, ISO)",
          "Risk Assessment",
        ],
      },
      {
        icon: <FaNetworkWired className="w-8 h-8 text-[#6366f1]" />,
        title: "Network & Systems",
        description:
          "Network engineers, system administrators, and IT infrastructure experts.",
        skills: [
          "Network Design",
          "System Administration",
          "IT Infrastructure",
          "Performance Optimization",
        ],
      },
      {
        icon: <FaChartBar className="w-8 h-8 text-[#6366f1]" />,
        title: "Digital Transformation",
        description:
          "Strategy consultants specializing in digital transformation and process optimization.",
        skills: [
          "Digital Strategy",
          "Process Optimization",
          "Change Management",
          "Technology Roadmap",
        ],
      },
    ];

    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#e0e7ff] text-[#6366f1] px-4 py-2 rounded-full text-sm font-medium">
              ••• EXPERTISE AREAS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Specialized <span className="text-[#6366f1]">IT Consultants</span>{" "}
              for Every Need
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Our network includes certified experts across all major IT
              disciplines, serving both companies seeking technical expertise
              and IT professionals looking to subcontract specialized work.
              Ready to tackle your most challenging projects with flexible
              partnership models.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-[#e0e7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300">
                  <div className="group-hover:text-white transition-all duration-300">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-[#6366f1] rounded-full mr-3"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Engagement Models Section
  const EngagementModelsSection = () => {
    const engagementTypes = [
      {
        icon: <FaClock className="w-8 h-8 text-[#6366f1]" />,
        title: "Daily Support",
        subtitle: "Immediate assistance",
        description:
          "Get instant access to expert help for urgent issues, debugging, or quick consultations.",
        features: [
          "Same-day response",
          "4-8 hours engagement",
          "Perfect for urgent fixes",
          "Flexible scheduling",
        ],
        pricing: "Starting from €200/day",
        popular: false,
      },
      {
        icon: <FaCalendarAlt className="w-8 h-8 text-[#6366f1]" />,
        title: "Weekly Engagement",
        subtitle: "Ongoing project support",
        description:
          "Regular weekly consultations for ongoing projects, code reviews, and strategic guidance.",
        features: [
          "2-3 days per week",
          "Project continuity",
          "Regular check-ins",
          "Progress tracking",
        ],
        pricing: "Starting from €1,200/week",
        popular: true,
      },
      {
        icon: <FaUsers className="w-8 h-8 text-[#6366f1]" />,
        title: "Monthly Retainer",
        subtitle: "Long-term partnership",
        description:
          "Comprehensive monthly engagements for complex projects and strategic technology initiatives.",
        features: [
          "Full-time dedication",
          "Strategic planning",
          "Team integration",
          "Best cost efficiency",
        ],
        pricing: "Starting from €4,500/month",
        popular: false,
      },
    ];

    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="bg-[#e0e7ff] text-[#6366f1] px-4 py-2 rounded-full text-sm font-medium">
              ENGAGEMENT OPTIONS
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
              Flexible <span className="text-[#6366f1]">Engagement Models</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              Choose the engagement model that best fits your project timeline,
              budget, and business requirements. Perfect for companies needing
              specialized skills or IT professionals seeking reliable
              subcontracting partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementTypes.map((engagement, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 relative ${
                  engagement.popular ? "ring-2 ring-[#6366f1] scale-105" : ""
                }`}
              >
                {engagement.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#6366f1] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="bg-[#e0e7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {engagement.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {engagement.title}
                  </h3>
                  <p className="text-[#6366f1] font-medium mb-2">
                    {engagement.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {engagement.description}
                  </p>
                </div>
                <ul className="space-y-3 mb-6">
                  {engagement.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <FaCheck className="w-4 h-4 text-[#6366f1] mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {engagement.pricing}
                  </div>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      engagement.popular
                        ? "bg-[#6366f1] text-white "
                        : "border border-[#6366f1] text-[#6366f1]  hover:text-white"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Consultant Hire Form Section
  const ConsultantHireForm = () => (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hire Your Perfect IT Consultant
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us about your project and we'll match you with the ideal
            consultant
          </p>
        </div>

        {!submitted ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaLaptopCode className="inline mr-2 text-[#6366f1]" />
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="cloud-migration">Cloud Migration</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="devops">DevOps & Infrastructure</option>
                  <option value="digital-transformation">
                    Digital Transformation
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="skillsRequired"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaCogs className="inline mr-2 text-[#6366f1]" />
                  Skills Required
                </label>
                <input
                  id="skillsRequired"
                  type="text"
                  value={formData.skillsRequired}
                  onChange={handleChange}
                  placeholder="e.g. React, Node.js, AWS, Python"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="projectDuration"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaCalendarAlt className="inline mr-2 text-[#6366f1]" />
                  Project Duration
                </label>
                <select
                  id="projectDuration"
                  value={formData.projectDuration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                >
                  <option value="">Select duration</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="ongoing">Ongoing</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="engagementType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaHandshake className="inline mr-2 text-[#6366f1]" />
                  Engagement Type
                </label>
                <select
                  id="engagementType"
                  value={formData.engagementType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                >
                  <option value="">Select engagement type</option>
                  <option value="daily">Daily Support</option>
                  <option value="weekly">Weekly Engagement</option>
                  <option value="monthly">Monthly Retainer</option>
                  <option value="project-based">Project-Based</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaMoneyBill className="inline mr-2 text-[#6366f1]" />
                  Budget Range
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="urgency"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaRocket className="inline mr-2 text-[#6366f1]" />
                  Project Urgency
                </label>
                <select
                  id="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                >
                  <option value="">Select urgency</option>
                  <option value="urgent">Urgent (Start within 24h)</option>
                  <option value="asap">ASAP (Start within 1 week)</option>
                  <option value="flexible">
                    Flexible (Start within 1 month)
                  </option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="projectDescription"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Project Description
                </label>
                <textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe your project requirements, goals, and any specific challenges..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaBuilding className="inline mr-2 text-[#6366f1]" />
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaUserTie className="inline mr-2 text-[#6366f1]" />
                  Contact Name
                </label>
                <input
                  id="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaEnvelope className="inline mr-2 text-[#6366f1]" />
                  Email Address
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contactPhone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <FaPhone className="inline mr-2 text-[#6366f1]" />
                  Phone Number
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  placeholder="+971 55 123 4567"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] transition-all"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleSubmit}
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center mx-auto"
              >
                Find My Perfect Consultant
                <FaArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-[#e0e7ff] rounded-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Request Received!
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Thank you for your consultant request. Our team will review your
              requirements and match you with the perfect IT consultant within
              24 hours. You'll receive consultant profiles and can interview
              them before making your final selection.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <ExpertiseAreasSection />
      <EngagementModelsSection />
      <ConsultantHireForm />
      <JoinToExplore />
    </div>
  );
};

export default ConsultantServicesPage;
