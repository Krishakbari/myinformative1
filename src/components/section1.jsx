import React from 'react'
import eleven from "../assets/11.png"

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-[2rem] p-10 md:flex items-center justify-between overflow-hidden m-10 h-[600px]">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-xl font-semibold text-gray-800">Beats Solo</p>
        <h1 className="text-5xl font-bold text-black">Wireless</h1>
        <h2 className="text-[10rem] font-extrabold text-white leading-none">HEADPHONE</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full mt-4 transition duration-300">
          Shop By Category
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src={eleven} alt="Headphone" className="w-[500px] h-auto object-contain" />
      </div>
    </div>
  );
};

export default HeroSection;

