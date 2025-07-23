import React from "react";
import eleven from "../assets/11.png";

const Banner = () => {
    return (
        <div className="relative max-w-[1400px] mx-auto my-20 px-4">
            <div className="bg-red-500 rounded-3xl text-white p-10 flex items-center justify-between relative overflow-visible min-h-[350px]">
                {/* Left Section */}
                <div className="z-10 space-y-2">
                    <p className="text-sm">30% OFF</p>
                    <h1 className="text-5xl font-extrabold">FINE SMILE</h1>
                    <p className="text-sm">10 Jan to 28 Jan</p>
                </div>

                {/* Right Section */}
                <div className="text-right z-10 space-y-2">
                    <p className="font-semibold">Air Solo Bass</p>
                    <h2 className="text-4xl font-bold">Winter Sale</h2>
                    <p className="text-sm leading-tight">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
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
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] z-0"
                    style={{
                        marginBottom: '-100px',
                    }}
                />
            </div>
        </div>
    );
};

export default Banner;