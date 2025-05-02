import fpic1 from "../assets/fpic1.png" // Update with the actual path to your vector image
import fpic2 from "../assets/fpic2.png" // Update with the actual path to your vector image
import fpic3 from "../assets/fpic3.png" // Update with the actual path to your vector image
import tax from "../assets/tax.png" // Update with the actual path to your vector image
import empire from "../assets/empire.png" // Update with the actual path to your vector image
import hexagon from "../assets/hexagon.png" // Update with the actual path to your vector image
import coin from "../assets/coin.png" // Update with the actual path to your vector image
const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        {/* Left side - Text */}
        <div className="max-w-lg">
          <div className="inline-block bg-[#CFDFFF] text-[#3754A1] px-4 py-1 rounded-full text-sm font-medium mb-4">
            ••• OUR FEATURES
          </div>
          <h2 className="text-4xl font-normal text-gray-900 mb-2">
            From  <span className="block font-bold">Heavy Rates.</span> to
            <span className="block font-bold">Open Gates.</span>
          </h2>
          <p className="text-2xl text-[#3754A1] font-medium">Join us.</p>
        </div>

        {/* Right side - Images */}
        <div className="relative w-full md:w-[500px] h-[200px]">
          <div className="absolute top-0 left-0 w-28 h-28 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-md">
            <img src={fpic1 || "/placeholder.svg"} alt="City view" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-4 left-32 md:left-36 w-40 h-28 md:w-48 md:h-32 overflow-hidden rounded-lg shadow-md">
            <img src={fpic2 || "/placeholder.svg"} alt="Aerial city view" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 left-[18rem] md:left-[21rem] w-40 h-48 md:w-48 md:h-56 overflow-hidden rounded-lg shadow-md">
            <img src={fpic3 || "/placeholder.svg"} alt="Dubai skyline" className="w-full h-full object-cover" />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-[-10px] left-[15rem] text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="absolute bottom-[-10px] left-[15rem] text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col">
          <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <img
              src={hexagon}// Replace with your actual image path
              alt="Envelope Icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Comprehensive Health Insurance</h3>
          <p className="text-gray-600 text-sm">
            A business consultant provides expert advice and guidance to businesses on various aspects.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col">
          <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <img
             src={tax} // Replace with your actual image path
              alt="Envelope Icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">No Personal Income Tax</h3>
          <p className="text-gray-600 text-sm">
            Business consultants play a crucial role by offering expert advice and guidance to businesses.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col">
          <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <img
              src={coin} // Replace with your actual image path
              alt="Envelope Icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Financial Independence</h3>
          <p className="text-gray-600 text-sm">
            Secure your financial future with strategic planning, tax optimization, and investment opportunities
            designed to maximize your wealth and business growth.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col">
          <div className="bg-blue-50 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            <img
              src={empire}  // Replace with your actual image path
              alt="Envelope Icon"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">Exclusive Banking Services</h3>
          <p className="text-gray-600 text-sm">
            Through their deep understanding of industry trends and best practices, consultants empower organizations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection

