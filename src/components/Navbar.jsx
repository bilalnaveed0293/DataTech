import React, { useState } from 'react';
import logo from '../assets/datatech logo.png';
import { Menu, X } from 'lucide-react'; // optional: `npm i lucide-react`
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("/form");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent shadow-none">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <img src={logo} alt="datatech logo" className="h-12 w-auto" />

        {/* Mobile toggle button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-transparent border-t border-gray-200 lg:border-none lg:static lg:block lg:w-auto`}
        >
          <ul className="flex flex-col space-y-4 p-4 lg:p-0 lg:flex-row lg:space-y-0 lg:space-x-10">
            <li>
              <a href="#" className="text-white hover:text-[#3754A1] text-xs">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#3754A1] text-xs">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#3754A1] text-xs">
                Page
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#3754A1] text-xs">
                Feature
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#3754A1] text-xs">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4 text-xs">
          <a
            href="#"
            className="text-white border rounded-full px-4 py-2 border-gray-300 hover:bg-[#3754A1]"
          >
            Log in
          </a>
          <a
            href="#"
            onClick={handleGetStarted}
            className="text-white border rounded-full px-4 py-2 border-gray-300 hover:bg-[#3754A1]"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;