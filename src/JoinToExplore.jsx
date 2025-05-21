import React from "react";
import BGF from "./assets/bgfooter.png";
import BGF2 from "./assets/datatech logo.svg";

const JoinToExplore = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Dark Background */}
      <div
        className="flex-1 flex flex-col items-center justify-center bg-gray-900 bg-cover bg-center"
        style={{ backgroundImage: `url(${BGF})` }}
      >
        <div className="text-center px-4 py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join to Explore Now
          </h1>
          <p className="text-xl text-white mb-8">Maximize your growth.</p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="hover:bg-white
                        bg-transparent hover:text-gray-900 px-6 text-white py-3 rounded-full text-xs flex items-center cursor-pointer border-white border"
            >
              Get Started
              <svg
                className="ml-2 w-2 h-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Simplified Footer */}
        <footer className="max-w-[960px] bg-white rounded-lg w-full">
          <div className="max-w-[860px] mx-auto px-6 md:px-14 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Company Info */}
              <div className="md:col-span-1">
                <div className="mb-4">
                  <div className="flex items-center">
                    <img src={BGF2} alt="Logo" className="w-auto h-12" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Helping businesses grow through tax efficiency, AI solutions,
                  & expert IT consulting.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-[#3754A1] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-[#3754A1] fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-[#3754A1]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.088 10.088 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Our Services - Simplified to the 3 key areas */}
              <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Tax Efficiency & Relocation */}
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-[#3754A1] mb-3">
                      Tax Efficiency & Relocation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Strategic tax planning & relocation services to UAE for
                      businesses & individuals.
                    </p>
                  </div>

                  {/* AI Business Solutions */}
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-[#3754A1] mb-3">
                      AI Business<br></br> Solutions
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Custom AI agents to reduce costs & accelerate growth for
                      your business.
                    </p>
                  </div>

                  {/* IT Consultant Services */}
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-[#3754A1] mb-3">
                      IT Consultant Services
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Expert IT consultants available for daily, weekly, or
                      monthly engagements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information - Simplified */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-[#3754A1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">+97-XXXXXXX</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-[#3754A1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">
                      Datatech@example.com
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-[#3754A1]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-600">Dubai, UAE</span>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200 text-center bg-[#DEE2FD] p-2 rounded">
                <p className="text-gray-600 text-sm">
                  Copyright © 2024 datatech. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JoinToExplore;
