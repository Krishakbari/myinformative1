import React from 'react';
import thirty from "../assets/30.png";
import thirtyone from "../assets/31.png";
import thirtytwo from "../assets/32.png";
import thirtythree from "../assets/33.png";
import thirtyfour from "../assets/34.png";

const BrandLogos = () => {
  const logos = [
    {
      id: 1,
      image: thirty,
      alt: "Golden Neutron"
    },
    {
      id: 2,
      image: thirtyone,
      alt: "JR Jack Roller"
    },
    {
      id: 3,
      image: thirtytwo,
      alt: "Sweety"
    },
    {
      id: 4,
      image: thirtythree,
      alt: "Mighty Furnitures"
    },
    {
      id: 5,
      image: thirtyfour,
      alt: "Fastlane"
    }
  ];

  return (
    <div className="bg-gray-100 py-4 mt-10 mb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="flex items-center justify-center w-full h-16 md:h-20"
            >
              <img 
                src={logo.image} 
                alt={logo.alt}
                className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 filter"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;