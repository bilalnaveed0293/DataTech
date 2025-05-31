import React, { useState } from "react";
import logo from "../assets/datatech logo2.svg";
import { Menu, X } from "lucide-react"; // optional: `npm i lucide-react`
import { useNavigate } from "react-router-dom";
import CustomLanguageSwitcher from "./CustomLanguageSwitcher";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("/form");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent shadow-none">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className=" lg:flex items-center space-x-4">
        {/* Logo */}
        <img src={logo} alt="datatech logo" className="h-12 lg:h-16  w-auto" />

        {/* Add language selector for mobile */}
        <li className="-mt-5">
              <div id="google_translate_element"></div>
        </li>
        </div>

        {/* Mobile toggle button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full max-sm:bg-black border-t border-gray-200 lg:border-none lg:static lg:block lg:w-auto`}
        >
          <ul className="flex flex-col space-y-4 p-4 lg:p-0 lg:flex-row lg:space-y-0 lg:space-x-10  text-sm">
            <li>
              <a href="/" className="text-white hover:text-[#3754A1]">
                Home
              </a>
            </li>
            <li>
              <a href="/ai" className="text-white hover:text-[#3754A1]">
                AI Services
              </a>
            </li>
            <li>
              <a
                href="/consultants"
                className="text-white hover:text-[#3754A1]"
              >
                Consultants
              </a>
            </li>
            <li>
              <a href="/tax" className="text-white hover:text-[#3754A1]">
                Tax Services
              </a>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4 text-xs">
          {/* <a
            href="#"
            className="w-full sm:w-auto text-white rounded-lg bg-transparent px-4 py-1 sm:px-3 md:px-4 lg:px-5 sm:py-0.5 md:py-1 lg:py-2 transition duration-300 text-xs sm:text-sm md:text-base lg:text-sm border border-[#3754A1] cursor-pointer"
          >
            Log in
          </a> */}

          <a
            href="#"
            onClick={handleGetStarted}
            className="w-full sm:w-auto text-white rounded-lg bg-transparent px-4 py-1 sm:px-3 md:px-4 lg:px-5 sm:py-0.5 md:py-1 lg:py-2 transition duration-300 text-xs sm:text-sm md:text-base lg:text-sm border border-[#3754A1] cursor-pointer"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
