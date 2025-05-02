import React from 'react'
import { ChevronDown } from 'lucide-react';
const Form = () => {
    return (
        <div className="py-35 bg-white max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Let’s Build Your Future Together</h2>
                <p className="text-base text-gray-500">
                    We’re here to simplify your business and help you take control of your financial future.
                </p>
            </div>

            {/* Form Section */}
            <div className="max-w-[52rem] mx-auto px-2">
                <form>
                    {/* Name Fields - Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-small text-gray-700 mb-2">
                                First name
                            </label>
                            <input
                                id="first-name"
                                type="text"
                                placeholder="First name"
                                className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-small text-gray-700 mb-2">
                                Last name
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                placeholder="Last name"
                                className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-small text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-3">
                        <label htmlFor="phone" className="block text-sm font-small text-gray-700 mb-2">
                            Phone number
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
                                placeholder="+97 (555) 000-0000"
                                className="w-full pl-16 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="service" className="block text-sm font-small text-gray-700 mb-2">
                            Service you are interested in
                        </label>
                        <input
                            id="service"
                            type="service"
                            placeholder="IT"
                            className="w-full px-2 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs"
                        />
                    </div>
                    {/* Privacy Policy Checkbox */}
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2 text-xs text-[#344054]">
                                You agree to our friendly{' '}
                                <a href="#" className="text-[#344054] underline">
                                    privacy policy
                                </a>.
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full bg-[#3754A1] hover:bg-blue-800 text-white py-2 rounded-lg text-xs"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form