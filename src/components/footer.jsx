import React from 'react';
import { Instagram, Facebook, Linkedin, MapPin, Phone } from 'lucide-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate =useNavigate()
  return (
    <footer className="bg-white py-16 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* gEETAZ Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-red-500 mb-4">GEETA'Z</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
            </p>
            
            {/* Made with love section */}
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <span>Made with</span>
              <span className="text-red-500 mx-1 text-lg">❤️</span>
              <span>by Krish@bari</span>
            </div>
            
            {/* YouTube Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
              Visit our YouTube Channel
            </button>
          </div>

          {/* Important Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Important Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link to="contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link to="blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link to="contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
              <li><Link to="blogs" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Address</h3>
            
            {/* Location */}
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
              <span className="text-gray-600">Noida , Uttar Pradesh</span>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">+91 1234567890</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;