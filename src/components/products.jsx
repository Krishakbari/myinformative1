import React from 'react';
import eighteen from "../assets/18.jpg";
import nineteen from "../assets/19.jpg";
import twenty from "../assets/20.jpg";
import twentyone from "../assets/21.jpg";
import twentytwo from "../assets/22.jpg";
import twentythree from "../assets/23.jpg";
import twentyfour from "../assets/24.jpg";
import twentyfive from "../assets/25.jpg";
import { Navigate, useNavigate } from 'react-router-dom';

const ProductShowcase = () => {
    const navigate=useNavigate()
  const products = [
    {
      id: 1,
      name: "Boat Headphone",
      price: "$120",
      image: eighteen,
      category: "Audio"
    },
    {
      id: 2,
      name: "Rocky Mountain",
      price: "$420",
      image: nineteen,
      category: "Wearable"
    },
    {
      id: 3,
      name: "Goggles",
      price: "$320",
      image: twenty,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Printed",
      price: "$220",
      image: twentyone,
      category: "Audio"
    },
    {
      id: 5,
      name: "Boat Headphone",
      price: "$120",
      image: twentytwo,
      category: "Audio"
    },
    {
      id: 6,
      name: "Rocky Mountain",
      price: "$420",
      image: twentythree,
      category: "Wearable"
    },
    {
      id: 7,
      name: "Goggles",
      price: "$320",
      image: twentyfour,
      category: "Accessories"
    },
    {
      id: 8,
      name: "Printed",
      price: "$220",
      image: twentyfive,
      category: "Audio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600">
            Explore Our Products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500 overflow-hidden group"
            >
              {/* Product Image Area */}
              <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <button onClick={()=>navigate("/cart")} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;