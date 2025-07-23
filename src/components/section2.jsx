import React from "react";
import twelve from "../assets/12.png";     // Earphone
import thirteen from "../assets/13.png";   // Gadget
import fourteen from "../assets/14.png";   // Laptop
import fifteen from "../assets/15.png";    // Laptop
import sixteen from "../assets/16.png";    // Earphone
import seventeen from "../assets/17.png";  // Gadget

const ProductCards = () => {
    const cardClasses = "group transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl overflow-hidden rounded-3xl p-6 h-[300px] relative text-white col-span-1";

    const imageHover = "absolute bottom-0 right-4 transition-transform duration-500 group-hover:-translate-y-2";

    const buttonHover = "transition-all duration-300 group-hover:scale-105 group-hover:brightness-110";

    return (
        <div className="grid grid-cols-4 gap-6 p-4 max-w-[1520px] mx-[30px]">
            {/* Card 1 - Earphone */}
            <div className={`${cardClasses} bg-gradient-to-br from-gray-800 to-gray-700 col-span-1`}>
                <p className="absolute bottom-16 left-6 text-5xl font-extrabold opacity-30 z-0">Earphone</p>
                <div className="relative z-10">
                    <p className="text-base">Enjoy</p>
                    <p className="text-2xl font-semibold">With</p>
                    <button className={`mt-6 px-6 py-2 rounded-full bg-red-500 text-white font-semibold ${buttonHover}`}>
                        Browse
                    </button>
                </div>
                <img src={twelve} alt="Earphone" className={`${imageHover} w-72 h-auto z-10`} />
            </div>

            {/* Card 2 - Gadget */}
            <div className={`${cardClasses} bg-gradient-to-br from-yellow-400 to-yellow-300`}>
                <p className="absolute bottom-16 left-6 text-5xl font-extrabold opacity-30 z-0">Gadget</p>
                <div className="relative z-10">
                    <p className="text-base">Enjoy</p>
                    <p className="text-2xl font-semibold">With</p>
                    <button className={`mt-6 px-6 py-2 rounded-full bg-white text-yellow-600 font-semibold ${buttonHover}`}>
                        Browse
                    </button>
                </div>
                <img src={thirteen} alt="Gadget" className="absolute bottom-0 right-[-60px] w-72 h-auto z-10 transition-transform duration-500 group-hover:-translate-y-2" />
            </div>

            {/* Card 3 - Laptop */}
            <div className={`${cardClasses} bg-gradient-to-br from-red-500 to-red-400 col-span-2`}>
                <p className="absolute bottom-16 left-6 text-6xl font-extrabold opacity-30 z-0">Laptop</p>
                <div className="relative z-10">
                    <p className="text-base">Enjoy</p>
                    <p className="text-2xl font-semibold">With</p>
                    <button className={`mt-6 px-6 py-2 rounded-full bg-white text-red-600 font-semibold ${buttonHover}`}>
                        Browse
                    </button>
                </div>
                <img src={fourteen} alt="Laptop" className="absolute bottom-0 right-8 w-60 h-auto z-10 transition-transform duration-500 group-hover:-translate-y-2" />
            </div>

            {/* Card 4 - Laptop */}
            <div className={`${cardClasses} bg-gradient-to-br from-[#b6bbc4] to-[#e2e5ea] col-span-2 text-black`}>
                <p className="absolute bottom-16 left-6 text-6xl font-extrabold opacity-30 z-0">Laptop</p>
                <div className="relative z-10">
                    <p className="text-base">Enjoy</p>
                    <p className="text-2xl font-semibold">With</p>
                    <button className={`mt-6 px-6 py-2 rounded-full bg-red-500 text-white font-semibold ${buttonHover}`}>
                        Browse
                    </button>
                </div>
                <img src={fifteen} alt="Laptop" className="absolute bottom-0 right-8 w-60 h-auto z-10 transition-transform duration-500 group-hover:-translate-y-2" />
            </div>

            {/* Card 5 - Earphone */}
            <div className={`${cardClasses} bg-gradient-to-br from-[#36d399] to-[#2bb673]`}>
                <p className="absolute bottom-16 left-6 text-5xl font-extrabold opacity-30 z-0">Earphone</p>
                <div className="relative z-10">
                    <p className="text-base">Enjoy</p>
                    <p className="text-2xl font-semibold">With</p>
                    <button className={`mt-6 px-6 py-2 rounded-full bg-red-500 text-white font-semibold ${buttonHover}`}>
                        Browse
                    </button>
                </div>
                <img src={sixteen} alt="Earphone" className="absolute bottom-0 right-4 w-48 h-auto z-10 transition-transform duration-500 group-hover:-translate-y-2" />
            </div>

            {/* Card 6 - Gadget */}
            <div className={`${cardClasses} bg-gradient-to-br from-[#007aff] to-[#2a7ff5]`}>
                <p className="absolute bottom-16 left-6 text-5xl font-extrabold opacity-30 z-0">Gadget</p>
                <div className="relative z-10">
                    <p className="text-base">Enjoy</p>
                    <p className="text-2xl font-semibold">With</p>
                    <button className={`mt-6 px-6 py-2 rounded-full bg-white text-yellow-600 font-semibold ${buttonHover}`}>
                        Browse
                    </button>
                </div>
                <img src={seventeen} alt="Gadget" className="absolute bottom-0 right-[48px] w-48 h-auto z-10 transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
        </div>
    );
};

export default ProductCards;
