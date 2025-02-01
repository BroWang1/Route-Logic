import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg shadow-lg rounded-full px-10 py-4 flex items-center gap-10 border border-white/20">
      <Link to="/" className="text-gray-900 font-medium text-lg transition-all duration-300 hover:scale-105 hover:text-black">
        Home 
      </Link>
      <Link to="/about" className="text-gray-900 font-medium text-lg transition-all duration-300 hover:scale-105 hover:text-black">
        About 
      </Link>
      <Link to="/contact" className="text-gray-900 font-medium text-lg transition-all duration-300 hover:scale-105 hover:text-black">
        Contact 
      </Link>
      <Link to="/business-plan" className="text-gray-900 font-medium text-lg transition-all duration-300 hover:scale-105 hover:text-black">
        Business Plan
      </Link>
      <button className="ml-auto bg-black text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-105">
        Book a Demo
      </button>
    </nav>
  );
};

export default Navbar;
