import React, { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Data Tech made our free zone business setup process seamless. From the initial consultation to final approvals, their team provided expert guidance",
      name: "Jacob Jones",
      position: "CEO, Bernard Health",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      quote: "When we approached DataTech, we were struggling with outdated IT infrastructure. They completely transformed our system with advanced cloud computing.",
      name: "Brooklyn Simmons",
      position: "CEO, Bernard Health",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      quote: "Their financial advisory services helped us save 35% on operational costs while improving overall efficiency.",
      name: "Alex Rivera",
      position: "CFO, Global Systems",
      image: "/api/placeholder/80/80"
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white w-full py-16 relative">
      {/* Top curved line decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-4" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,54 C240,0 480,0 720,27 C960,54 1200,54 1440,54 L1440,54 L0,54 Z" fill="#F3F4F6" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium text-sm tracking-wider mb-2">
            <span className="text-blue-400 mx-1">⋆</span> 
            OUR FEEDBACK 
            <span className="text-blue-400 mx-1">⋆</span>
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Check what these clients have to say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our <span className="font-semibold">WORK</span> speaks louder than our <span className="font-semibold">WORD</span>. Find out how we helped clients overcome challenges and succeed.
          </p>
        </div>

        {/* Testimonials Container - Flexbox */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-4 mb-12">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex-1 max-w-md bg-blue-50 rounded-xl p-6 relative"
            >
              <div className="mb-12">
                <p className="text-gray-700">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              {/* Quote marks decorative element */}
              <div className="absolute right-8 bottom-8 text-blue-100 opacity-50">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.050.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-2">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <span className="sr-only">Previous</span>
            &lt;
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            <span className="sr-only">Next</span>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;