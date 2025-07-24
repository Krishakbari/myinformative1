import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-red-600">
          GEETA'Z
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium text-lg items-center">
          <li><Link to="/" className="hover:text-red-600">Home</Link></li>
          <li><Link to="/shop" className="hover:text-red-600">Shop</Link></li>
          <li><Link to="/about" className="hover:text-red-600">About</Link></li>
          <li><Link to="/blogs" className="hover:text-red-600">Blogs</Link></li>
          <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-600">
              Quick Links ▼
            </div>
            <ul className="absolute left-0 top-full pt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <li><Link to="/trending" className="block px-4 py-2 hover:bg-red-50 hover:text-red-600">Trending Products</Link></li>
                <li><Link to="/best-selling" className="block px-4 py-2 hover:bg-red-50 hover:text-red-600">Best Selling</Link></li>
                <li><Link to="/top-rated" className="block px-4 py-2 hover:bg-red-50 hover:text-red-600">Top Rated</Link></li>
              </div>
            </ul>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-700 text-lg">
          <FaSearch className="cursor-pointer hover:text-red-600 hidden md:block" />
          <div className="relative">
            <FaShoppingCart onClick={() => navigate("/cart")} className="cursor-pointer hover:text-red-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>

          {/* Hamburger */}
          <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 origin-top ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium text-base">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/trending" onClick={() => setMenuOpen(false)}>Trending Products</Link></li>
          <li><Link to="/best-selling" onClick={() => setMenuOpen(false)}>Best Selling</Link></li>
          <li><Link to="/top-rated" onClick={() => setMenuOpen(false)}>Top Rated</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
