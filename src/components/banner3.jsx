import React from "react";
import banner1 from "../assets/banner1.jpg";

const Banner1 = () => {
    return (
        <div
            className="bg-fixed bg-cover bg-center bg-no-repeat mt-20"
            style={{ backgroundImage: `url(${banner1})` }}
        >
            <div className="min-h-[600px] flex flex-col justify-center items-center text-white text-center px-6 py-16 bg-black/50">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Next-Gen Electronics at Your Fingertips
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Discover the latest tech innovations with unbeatable prices and free shipping on all orders.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Banner1;
