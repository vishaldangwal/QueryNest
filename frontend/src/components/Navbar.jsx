import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition duration-300">
              QueryNest
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="/blogs"
              className="text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
            >
              Blogs
            </a>
            <a
              href="/categories"
              className="text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
            >
              Categories
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-indigo-600 transition duration-300 font-medium"
            >
              About
            </a>
          </div>

          {/* Search Bar and User Profile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-sm text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="User"
                />
                <span className="ml-2 font-medium">John Doe</span>
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                  >
                    Settings
                  </a>
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            >
              Home
            </a>
            <a
              href="/blogs"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            >
              Blogs
            </a>
            <a
              href="/categories"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            >
              Categories
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;