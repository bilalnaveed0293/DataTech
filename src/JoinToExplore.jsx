import React from "react";
import BGF from "./assets/bgfooter.png";
import BGF2 from "./assets/datatech logo.svg";

const JoinToExplore = () => {
  return (
    <div className=" flex flex-col">
      {/* Hero Section with Dark Background */}
      <div
        className="flex-1 flex flex-col items-center justify-center bg-gray-900 bg-cover bg-center"
        style={{ backgroundImage: { BGF } }}
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
            <button className="bg-transparent cursor-pointer text-white border hover:bg-white hover:text-gray-900  border-white px-6 py-3 rounded-full text-xs flex items-center">
              Join Now
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
        <footer className="bg-white rounded-lg">
          <div className="max-w-[860px] mx-auto px-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Company Info */}
              <div className="md:col-span-1 mb-8 mt-5">
                <div className="mb-4">
                  <div className="flex items-center">
                    <img src={BGF2} alt="Logo" className="w-auto h-12 " />
                  </div>
                </div>
                <p className="text-gray-600 text-[10px] mb-4 font-semibold">
                  Our customized solutions include residency, health insurance,
                  and strategic financial planning, helping you maximize your
                  earnings while expanding your global opportunities.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center text-white"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="w-5 h-5 text-[#3754A1] fill-current"
                      fill=""
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center text-white"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5 text-[#3754A1] fill-current"
                      fill=""
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center text-white"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="w-5 h-5 text-[#3754A1] fill-current"
                      fill=""
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center text-white"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="w-5 h-5 text-[#3754A1]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.088 10.088 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#DEE2FD] flex items-center justify-center text-white"
                  >
                    <span className="sr-only">YouTube</span>
                    <svg
                      className="w-5 h-5 text-[#3754A1]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Our Product, Our Company, Resources */}
              <div className="md:col-span-3 mt-5">
                <div className="flex flex-row justify-around space-x-4">
                  {/* Our Product */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Our Product</h3>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Product Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Our Company */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Our Company</h3>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Leadership Team
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Press
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Resources */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-xs">
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Events
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Get Demo
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-[#3754A1]"
                        >
                          Community Forums
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-1">
              <div className="flex flex-wrap justify-around items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#3754A1] fill-[#DEE2FD]"
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
                  </div>
                  <span className="text-gray-600 text-xs">+97-XXXXXXX</span>
                </div>
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#3754A1] fill-[#DEE2FD]"
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
                  </div>
                  <span className="text-gray-600 text-xs">
                    Datatech@example.com
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#3754A1] fill-[#DEE2FD]"
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
                  </div>
                  <span className="text-xs text-gray-600">Address, Dubai.</span>
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200 mb-2 bg-[#DEE2FD]">
                <p className="text-gray-500 text-xs text-center">
                  Copyright 2024 datatech.
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
