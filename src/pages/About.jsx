import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/shop');
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About GEETA'Z</h1>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to <span className="text-red-500 font-semibold">GEETA'Z</span>, your premier destination for cutting-edge smart watches, premium headphones, and essential tech accessories. From fitness tracking to crystal-clear audio experiences, we're here to enhance your digital lifestyle with innovative products and exceptional service.
            </p>
          </div>

          {/* Our Mission */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At GEETA'Z, our mission is to bring the latest wearable technology and audio innovations directly to your doorstep. We're passionate about helping you stay connected, motivated, and entertained with high-quality smart watches, headphones, and accessories that seamlessly integrate into your daily routine — all at competitive prices with fast, reliable delivery.
            </p>
          </div>

          {/* Why Choose GEETA'Z */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Why Choose GEETA'Z?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Curated selection of premium smart watches from leading brands</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">High-fidelity headphones for audiophiles and casual listeners alike</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Essential accessories to complete your tech ecosystem</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Expert customer support with personalized recommendations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <span className="text-gray-700">Hassle-free returns and warranty protection</span>
              </li>
            </ul>
          </div>

          {/* Our Vision */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where technology empowers everyone to live smarter, healthier, and more connected lives. At GEETA'Z, we're committed to being your trusted partner in discovering the perfect wearable tech and audio solutions that match your lifestyle, whether you're a fitness enthusiast, music lover, or tech professional.
            </p>
          </div>

          {/* Join the GEETA'Z Family */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Join the GEETA'Z Family</h2>
            <p className="text-gray-700 mb-6">
              Whether you're tracking your fitness goals, immersing yourself in music, or staying connected on the go — GEETA'Z has the perfect tech companion for your journey.
            </p>
            <button 
              onClick={handleStartShopping}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default About;