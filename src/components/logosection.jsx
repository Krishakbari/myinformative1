import React from 'react';
import thirty from "../assets/30.png";
import thirtyone from "../assets/31.png";
import thirtytwo from "../assets/32.png";
import thirtythree from "../assets/33.png";
import thirtyfour from "../assets/34.png";

const logos = [
  { id: 1, image: thirty, alt: "Golden Neutron" },
  { id: 2, image: thirtyone, alt: "JR Jack Roller" },
  { id: 3, image: thirtytwo, alt: "Sweety" },
  { id: 4, image: thirtythree, alt: "Mighty Furnitures" },
  { id: 5, image: thirtyfour, alt: "Fastlane" },
];

const BrandLogos = () => {
  const repeated = [...logos, ...logos,...logos, ...logos]; // Double the logos for looping

  return (
    <div className="bg-gray-100 py-10 overflow-hidden">
      <div className="relative w-full">
        <div className="flex animate-slide gap-12 w-max">
          {repeated.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-40 h-20"
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="object-contain max-h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
