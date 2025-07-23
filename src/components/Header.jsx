import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cartCount] = useState(3);
  const navigate=useNavigate()

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white relative z-50">
      {/* Left: Logo + Links */}
      <div className="flex items-center gap-10">
        <Link to="/" className="text-2xl font-extrabold text-red-600">
          GEETA'Z
        </Link>

        {/* Links */}
        <ul className="flex gap-6 text-gray-600 font-medium text-lg items-center">
          <li>
            <Link to="/" className="hover:text-red-600 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-red-600 transition-colors duration-200">Shop</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-600 transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-red-600 transition-colors duration-200">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-600 transition-colors duration-200">Contact</Link>
          </li>

          {/* Dropdown - Fixed version */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-600 transition-colors duration-200 py-2">
              Quick Links
              <span className="transform transition-transform duration-200 group-hover:rotate-180">
                ▼
              </span>
            </div>
            {/* Invisible bridge to prevent gap issues */}
            <div className="absolute left-0 top-full w-full h-2 bg-transparent"></div>
            <ul className="absolute left-0 top-full pt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <li>
                  <Link 
                    to="/trending" 
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-gray-700 transition-colors duration-200"
                  >
                    Trending Products
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/best-selling" 
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-gray-700 transition-colors duration-200"
                  >
                    Best Selling
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/top-rated" 
                    className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 text-gray-700 transition-colors duration-200"
                  >
                    Top Rated
                  </Link>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6 text-gray-700 text-lg relative">
        <FaSearch className="cursor-pointer hover:text-red-600 transition-colors duration-200" />

        <div className="relative">
          <FaShoppingCart onClick={()=>navigate("/cart")} className="cursor-pointer hover:text-red-600 transition-colors duration-200" />
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;