import React from 'react'
import logo from "../assets/datatech logo.png"
const Navbar = () => {
    return (
        <header className='bg-white shadow mb-3'>
            <div className="container mr-auto flex justify-around  items-center">
                <img
                    src={logo}
                    alt="datatech logo"
                    className='h-12 w-35' />
                <nav className='hidden md:block'>
                    <ul className='flex space-x-10'>
                        <li><a href="#" className="text-[#3754A1] text-xs">Home</a></li>
                        <li><a href="#" className="text-[#161616] hover:text-blue-500 text-xs">About</a></li>
                        <li><a href="#" className="text-[#161616] hover:text-blue-500 text-xs">Page</a></li>
                        <li><a href="#" className="text-[#161616]  hover:text-blue-500 text-xs">Feature</a></li>
                        <li><a href="#" className="text-[#161616] hover:text-blue-500 text-xs">Contact</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4 text-xs">
                    <a href="#" className="text-gray-600 hover:text-blue-500">Log in</a>
                    <a href="#" className="bg-white text-[#161616]  px-4 py-2 rounded-full border-1 border-[#DDE1FD]">Get Started</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar
