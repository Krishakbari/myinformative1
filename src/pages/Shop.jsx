import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import eighteen from "../assets/18.jpg";
import nineteen from "../assets/19.jpg";
import twenty from "../assets/20.jpg";
import twentyone from "../assets/21.jpg";
import twentytwo from "../assets/22.jpg";
import twentythree from "../assets/23.jpg";
import twentyfour from "../assets/24.jpg";
import twentyfive from "../assets/25.jpg";
import { Navigate, useNavigate } from 'react-router-dom';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [priceRange, setPriceRange] = useState(5000);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate=useNavigate()
  
  // Your 16 products
  const allProducts = [
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
      name: "Boat Headphone Pro",
      price: "$180",
      image: twentytwo,
      category: "Audio"
    },
    {
      id: 6,
      name: "Rocky Mountain Pro",
      price: "$520",
      image: twentythree,
      category: "Wearable"
    },
    {
      id: 7,
      name: "Premium Goggles",
      price: "$420",
      image: twentyfour,
      category: "Accessories"
    },
    {
      id: 8,
      name: "Printed Special",
      price: "$320",
      image: twentyfive,
      category: "Audio"
    },
    {
      id: 9,
      name: "Boat Headphone9",
      price: "$1200",
      image: eighteen,
      category: "Audio"
    },
    {
      id: 10,
      name: "Rocky Mountain10",
      price: "$420",
      image: nineteen,
      category: "Wearable"
    },
    {
      id: 11,
      name: "Goggles11",
      price: "$3200",
      image: twenty,
      category: "Accessories"
    },
    {
      id: 12,
      name: "Printed11",
      price: "$2200",
      image: twentyone,
      category: "Audio"
    },
    {
      id: 13,
      name: "Boat Headphone Pro13",
      price: "$1800",
      image: twentytwo,
      category: "Audio"
    },
    {
      id: 14,
      name: "Rocky Mountain Pro14",
      price: "$52",
      image: twentythree,
      category: "Wearable"
    },
    {
      id: 15,
      name: "Premium Goggles15",
      price: "$4200",
      image: twentyfour,
      category: "Accessories"
    },
    {
      id: 16,
      name: "Printed Special16",
      price: "$3200",
      image: twentyfive,
      category: "Audio"
    }
  ];

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'AUDIO', label: 'AUDIO' },
    { id: 'WEARABLE', label: 'WEARABLE' },
    { id: 'ACCESSORIES', label: 'ACCESSORIES' }
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('ALL');
    setPriceRange(5000);
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || 
                           product.category.toUpperCase() === selectedCategory;
    const productPrice = parseInt(product.price.replace('$', ''));
    const matchesPrice = productPrice <= priceRange;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Pagination - 8 products per page
  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 mx-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Prev
        </button>
      );
    }

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded transition-colors ${
            currentPage === i 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 mx-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Next
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex min-h-screen bg-gray-50 px-20">
      {/* Sidebar */}
      <div className="w-80 bg-gray-200 p-6 shadow-sm mt-6">
        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
          />
        </div>

        {/* Category Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Category</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategory === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                />
                <span className="ml-3 text-gray-700 font-medium">{category.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Price Range</h3>
          <div className="mb-4">
            <span className="text-gray-700 font-medium">
              Price Range: $0- ${priceRange}
            </span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${(priceRange / 5000) * 100}%, #e5e7eb ${(priceRange / 5000) * 100}%, #e5e7eb 100%)`
              }}
            />
            <style jsx>{`
              .slider::-webkit-slider-thumb {
                appearance: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #ef4444;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
              .slider::-moz-range-thumb {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #ef4444;
                cursor: pointer;
                border: 2px solid white;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
            `}</style>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Reset Filters
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Product Image */}
              <div className="aspect-square bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-gray-900 mb-3">
                  {product.price}
                </p>
                <button onClick={()=>navigate("/cart")} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Only show if there are multiple pages */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {renderPaginationButtons()}
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Shop;