import React from 'react';
import eleven from "../assets/11.png";

const HeroSection = () => {
  return (
    <div className="mt-24 bg-gradient-to-r from-gray-200 to-gray-100 rounded-[2rem] px-6 py-12 md:p-10 flex flex-col md:flex-row items-center justify-between overflow-x-hidden mx-4 md:mx-10">


      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
        <p className="text-lg md:text-xl font-semibold text-gray-800">Beats Solo</p>
        <h1 className="text-4xl md:text-5xl font-bold text-black">Wireless</h1>
        <h2 className="text-3xl sm:text-5xl md:text-[8rem] xl:text-[10rem] font-extrabold text-white leading-none">HEADPHONE</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full mt-4 transition duration-300">
          Shop By Category
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={eleven}
          alt="Headphone"
          className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
