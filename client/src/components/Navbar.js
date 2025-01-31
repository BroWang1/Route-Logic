import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg rounded-full px-6 py-3 fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
      <Link to="/" className="text-gray-700 hover:text-blue-500 font-semibold">Home</Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-500 font-semibold">About</Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-500 font-semibold">Contact</Link>
      <Link to="/business-plan" className="text-gray-700 hover:text-blue-500 font-semibold">Business Plan</Link>
      <button className="ml-auto bg-black text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-800">
        Book a Demo
      </button>
    </nav>
  );
};

export default Navbar;
