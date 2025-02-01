import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg shadow-lg rounded-full px-10 py-4 flex items-center gap-10 border border-white/20">
      <Link to="/" className="text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-110 hover:text-black">
        Home
      </Link>
      <Link to="/about" className="text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-110 hover:text-black">
        About
      </Link>
      <Link to="/contact" className="text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-110 hover:text-black">
        Contact
      </Link>
      <Link to="/investor-relations" className="text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-110 hover:text-black">
        Investor Relations
      </Link>
      
      {/* Right-aligned button for better spacing */}
      <div className="ml-auto">
        <button className="bg-black text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:bg-gray-800 hover:scale-110">
          Book a Demo
        </button>
      </div>
    </header>
  );
};

export default Navbar;
