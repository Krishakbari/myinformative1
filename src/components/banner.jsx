
import React from "react";
import eleven from "../assets/11.png";

const Banner = () => {
    return (
        <div className="relative max-w-[1400px] mx-auto my-10 px-4">
            <div className="bg-red-500 rounded-3xl text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden md:overflow-visible min-h-[350px]">

                {/* Left Section */}
                <div className="z-10 space-y-2 text-center md:text-left mb-8 md:mb-0 w-full md:w-1/2">
                    <p className="text-sm">30% OFF</p>
                    <h1 className="text-3xl md:text-5xl font-extrabold">FINE SMILE</h1>
                    <p className="text-sm">10 Jan to 28 Jan</p>
                </div>

                {/* Right Section */}
                <div className="z-10 space-y-2 text-center md:text-right w-full md:w-1/2">
                    <p className="font-semibold">Air Solo Bass</p>
                    <h2 className="text-2xl md:text-4xl font-bold">Winter Sale</h2>
                    <p className="text-sm leading-tight">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br className="hidden sm:block" />
                        Eaque reiciendis
                    </p>
                    <button className="mt-4 px-6 py-2 bg-white text-red-500 font-semibold rounded-full hover:bg-red-100 transition-all">
                        Shop Now
                    </button>
                </div>

                {/* Headphone Image */}
                <img
                    src={eleven}
                    alt="Headphones"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[450px] z-0 pointer-events-none md:mb-[-100px] sm:opacity-100 opacity-60"
                />
            </div>
        </div>
    );
};

export default Banner;
