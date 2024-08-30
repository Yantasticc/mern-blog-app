import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex flex-col md:flex-row justify-between items-center w-full">
      {/* Search Bar */}
      <div className="relative w-full md:w-1/3 mb-2 md:mb-0">
        <input
          type="text"
          className="w-full bg-gray-700 text-white p-2 rounded-md focus:outline-none"
          placeholder="Search blogs..."
        />
        <FaSearch className="absolute top-2 right-3 text-gray-400" />
      </div>

      {/* Username */}
      <div className="text-white">Username</div>
    </nav>
  );
};

export default Navbar;
