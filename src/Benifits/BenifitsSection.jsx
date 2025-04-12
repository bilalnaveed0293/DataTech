const BenefitsSection = () => {
    return (
      <div className="bg-white py-16 px-4 md:px-8 w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <button className="bg-[#CFDFFF] text-[#3754A1] px-4 py-1 rounded-full text-sm font-medium">
          ••• WHAT WE OFFER
          </button>
          <h2 className="text-4xl font-bold mt-6 text-gray-900">Explore Our Benefits</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our customized solutions include residency, health insurance, and strategic financial planning—helping you
            maximize earnings while unlocking global opportunities.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Health Insurance Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <svg className="w-12 h-12 text-[#3754A1]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.995 11.95h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-18 0h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm8.994-8h.01a1 1 0 1 0 0-2h-.01a1 1 0 0 0 0 2zm0 18h.01a1 1 0 1 0 0-2h-.01a1 1 0 0 0 0 2zm9.07-15.811l-1.286 1.536a1 1 0 0 0 .152 1.407 1 1 0 0 0 .625.218 1.001 1.001 0 0 0 .782-.353l1.286-1.537a1 1 0 0 0-1.558-1.271zM3.417 17.31l-1.285 1.536a1 1 0 0 0 .152 1.407 1.001 1.001 0 0 0 1.407-.152l1.286-1.536a1 1 0 0 0-1.56-1.254zm13.164 1.534l1.285 1.536a1 1 0 0 0 1.407.152.998.998 0 0 0 .153-1.406l-1.286-1.536a1 1 0 1 0-1.56 1.254zM5.47 5.472L4.184 3.936A1 1 0 1 0 2.625 5.19l1.286 1.536a.999.999 0 0 0 1.407.153.999.999 0 0 0 .153-1.407zM19 14h-7v-7a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Comprehensive Health Insurance</h3>
            <p className="text-gray-600 text-sm">
              Stay protected with top-tier health insurance plans that provide extensive medical coverage, ensuring peace
              of mind for you and your family.
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center text-gray-600 text-sm">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* No Personal Income Tax Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <svg className="w-12 h-12 text-[#3754A1]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z" />
                  <path d="M14 10.5h-4v2h4v-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">No Personal Income Tax</h3>
            <p className="text-gray-600 text-sm">
              Enjoy 100% of your earnings with Dubai's zero personal income tax policy, allowing you to reinvest, save,
              and grow your wealth without deductions.
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* Banking Services Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <svg className="w-12 h-12 text-[#3754A1]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12z" />
                  <path d="M6 10h12v2H6z" />
                  <path d="M12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Exclusive Banking Services</h3>
            <p className="text-gray-600 text-sm">
              Gain access to premier banking solutions, including multi-currency accounts, high-end financial management,
              and seamless international transactions.
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
          {/* Financial Independence Card */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 md:col-start-2">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <svg className="w-12 h-12 text-[#3754A1]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                  <path d="M12 11c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                  <path d="M10 8.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">Financial Independence</h3>
            <p className="text-gray-600 text-sm">
              Secure your financial future with strategic planning, tax optimization, and investment opportunities
              designed to maximize your wealth and business growth.
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default BenefitsSection
  
  