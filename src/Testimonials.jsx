import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideInterval = useRef(null);
  const slideContainer = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        "As a digital nomad, I'd been jumping from country to country, trying to keep my income steady. When I decided to settle in the UAE, Data Tech took care of everything. Thanks to their tax optimization, I'm keeping a lot more of what I earn, and the whole process was smoother than I expected. I can't recommend them enough.",
      name: "Emily J.",
      position: "Remote Consultant",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "As a digital nomad, I'd been jumping from country to country, trying to keep my income steady. When I decided to settle in the UAE, Data Tech took care of everything. Thanks to their tax optimization, I'm keeping a lot more of what I earn, and the whole process was smoother than I expected. I can't recommend them enough.",
      name: "Mark T.",
      position: "Digital Entrepreneur",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "I'd always dreamed of living in the UAE, but the paperwork and legal stuff seemed impossible to manage. Then I found Data Tech. They took care of everything — my residency, work permit, and all the complicated forms I would've struggled with. Now, I get to live my dream and grow my business without the stress. Couldn't have done it without them!",
      name: "Ravi M.",
      position: "Freelance Developer",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Moving to the UAE was a big step for me, but I didn't want to deal with all the headaches of setting up a full business. Data Tech made it so easy. They helped me set up everything legally, and the best part? I'm keeping all my earnings without the crazy taxes. It's been a game-changer for my career.",
      name: "Sophia L.",
      position: "Marketing Consultant",
      rating: 5,
    },
  ];

  // For smooth sliding, duplicate the first item at the end
  const extendedTestimonials = [...testimonials, testimonials[0]];

  // Start auto-scrolling
  useEffect(() => {
    const startSlider = () => {
      slideInterval.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide((prev) => {
            // If we're at the last slide (which is a duplicate of the first)
            if (prev === testimonials.length) {
              // Quickly reset to the first slide without animation
              setTimeout(() => {
                if (slideContainer.current) {
                  slideContainer.current.style.transition = "none";
                  setCurrentSlide(0);
                  // Re-enable transition after a short delay
                  setTimeout(() => {
                    if (slideContainer.current) {
                      slideContainer.current.style.transition =
                        "transform 0.8s ease-in-out";
                    }
                  }, 50);
                }
              }, 800);
              return prev;
            }
            return prev + 1;
          });
        }
      }, 4000);
    };

    startSlider();

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPaused, testimonials.length]);

  // When slide changes, ensure proper transition
  useEffect(() => {
    if (slideContainer.current && currentSlide === 0) {
      setTimeout(() => {
        if (slideContainer.current) {
          slideContainer.current.style.transition =
            "transform 0.8s ease-in-out";
        }
      }, 50);
    }
  }, [currentSlide]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Generate star rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="bg-white w-full py-16 relative">
      {/* Top curved line decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-4"
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,54 C240,0 480,0 720,27 C960,54 1200,54 1440,54 L1440,54 L0,54 Z"
            fill="#F3F4F6"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-[#3754A1] font-medium text-xs tracking-wider mb-2">
            <span className="text-blue-400 mx-1">⋆</span>
            OUR FEEDBACK
            <span className="text-blue-400 mx-1">⋆</span>
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Stories, Real Success
          </h2>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide ||
                (currentSlide === testimonials.length && index === 0)
                  ? "w-8 bg-[#3754A1]"
                  : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Slider container with overflow hidden */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Slider track */}
          <div
            ref={slideContainer}
            className="flex transition-transform duration-800 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / extendedTestimonials.length
              }%)`,
              width: `${extendedTestimonials.length * 100}%`,
            }}
          >
            {/* Individual slides */}
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={`slide-${testimonial.id}-${idx}`}
                className="w-full px-4 flex justify-center"
                style={{ flexBasis: `${100 / extendedTestimonials.length}%` }}
              >
                <div className="max-w-2xl w-full bg-gradient-to-br from-[#F6F8FF] to-[#EEF2FF] rounded-xl p-8 shadow-lg border border-[#E9EEFF] flex flex-col justify-between h-full">
                  {/* Quote mark decoration */}
                  <div className="absolute -top-4 left-8 text-[#3754A1] opacity-20">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.050.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                    </svg>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-700 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center mt-auto">
                    {/* Avatar with gradient placeholder */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full overflow-hidden mr-4 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <div className="flex items-center mb-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#3754A1] text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay navigation arrows */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 -translate-y-1/2 pointer-events-none">
            <button
              onClick={() => {
                setCurrentSlide((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                );
              }}
              className="w-10 h-10 flex items-center justify-center bg-white text-[#3754A1] rounded-full shadow-md hover:bg-[#3754A1] hover:text-white transition duration-300 ease-in-out border border-gray-200 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <button
              onClick={() => {
                setCurrentSlide((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                );
              }}
              className="w-10 h-10 flex items-center justify-center bg-white text-[#3754A1] rounded-full shadow-md hover:bg-[#3754A1] hover:text-white transition duration-300 ease-in-out border border-gray-200 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
