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
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [priceRange, setPriceRange] = useState(5000);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const allProducts = [
    { id: 1, name: "Boat Headphone", price: "$120", image: eighteen, category: "Audio" },
    { id: 2, name: "Rocky Mountain", price: "$420", image: nineteen, category: "Wearable" },
    { id: 3, name: "Goggles", price: "$320", image: twenty, category: "Accessories" },
    { id: 4, name: "Printed", price: "$220", image: twentyone, category: "Audio" },
    { id: 5, name: "Boat Headphone Pro", price: "$180", image: twentytwo, category: "Audio" },
    { id: 6, name: "Rocky Mountain Pro", price: "$520", image: twentythree, category: "Wearable" },
    { id: 7, name: "Premium Goggles", price: "$420", image: twentyfour, category: "Accessories" },
    { id: 8, name: "Printed Special", price: "$320", image: twentyfive, category: "Audio" },
    { id: 9, name: "Boat Headphone9", price: "$1200", image: eighteen, category: "Audio" },
    { id: 10, name: "Rocky Mountain10", price: "$420", image: nineteen, category: "Wearable" },
    { id: 11, name: "Goggles11", price: "$3200", image: twenty, category: "Accessories" },
    { id: 12, name: "Printed11", price: "$2200", image: twentyone, category: "Audio" },
    { id: 13, name: "Boat Headphone Pro13", price: "$1800", image: twentytwo, category: "Audio" },
    { id: 14, name: "Rocky Mountain Pro14", price: "$52", image: twentythree, category: "Wearable" },
    { id: 15, name: "Premium Goggles15", price: "$4200", image: twentyfour, category: "Accessories" },
    { id: 16, name: "Printed Special16", price: "$3200", image: twentyfive, category: "Audio" }
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

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || product.category.toUpperCase() === selectedCategory;
    const productPrice = parseInt(product.price.replace('$', ''));
    const matchesPrice = productPrice <= priceRange;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPaginationButtons = () => {
    const buttons = [];

    if (currentPage > 1) {
      buttons.push(<button key="prev" onClick={() => handlePageChange(currentPage - 1)} className="px-4 py-2 mx-1 bg-red-500 text-white rounded">Prev</button>);
    }

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(<button key={i} onClick={() => handlePageChange(i)} className={`px-4 py-2 mx-1 rounded ${currentPage === i ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{i}</button>);
    }

    if (currentPage < totalPages) {
      buttons.push(<button key="next" onClick={() => handlePageChange(currentPage + 1)} className="px-4 py-2 mx-1 bg-red-500 text-white rounded">Next</button>);
    }

    return buttons;
  };

  return (
    <div className="pt-24 px-4 md:px-20 bg-gray-50 min-h-screen">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button onClick={() => setShowFilters(!showFilters)} className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg">
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className={`w-full md:w-80 bg-gray-200 p-6 rounded-md transition-all duration-300 ease-in-out mb-4 md:mb-0 md:mr-6 ${showFilters ? "block" : "hidden"} md:block`}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Category */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Category</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                    className="w-4 h-4"
                  />
                  <span className="ml-2">{category.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Price Range</h3>
            <span className="block mb-2 text-gray-700">Price Range: $0 - ${priceRange}</span>
            <input
              type="range"
              min="0"
              max="5000"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <button
            onClick={resetFilters}
            className="w-full bg-red-500 text-white py-3 rounded-lg"
          >
            Reset Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <p className="mb-4 text-gray-600">
            Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
                <h3 className="mt-3 font-semibold text-gray-900">{product.name}</h3>
                <p className="text-lg font-bold">{product.price}</p>
                <button
                  onClick={() => navigate("/cart")}
                  className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                >
                  🛒 Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 flex-wrap">
              {renderPaginationButtons()}
            </div>
          )}

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-12">No products found matching your criteria.</p>
          )}
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Shop;
