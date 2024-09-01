import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex flex-col md:flex-row justify-between items-center w-full">
      {/* Logo */}
      <div className="text-white text-2xl font-bold mb-2 md:mb-0 md:flex-1 text-center">
        Blogify
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-1/3 mb-2 md:mb-0 md:flex-1">
        <input
          type="text"
          className="w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none"
          placeholder="Search blogs..."
        />
        <FaSearch className="absolute top-2 right-3 text-gray-400" />
      </div>

      {/* Username */}
      <div className="text-white md:flex-1 text-center">
        @username
      </div>
    </nav>
  );
};

export default Navbar;
