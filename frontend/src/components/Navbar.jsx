import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to update user state when the token is available
  const updateUserFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          username: decoded.username,
          id: decoded.id,
        });

        // Optional: check if token is expired
        if (decoded.exp * 1000 < Date.now()) {
          handleLogout(); // Auto logout if token expired
        }
      } catch (err) {
        console.error("Invalid token", err);
        handleLogout();
      }
    }
  };

  useEffect(() => {
    // First, check the token when the component mounts
    updateUserFromToken();

    // Add a listener for changes in localStorage
    window.addEventListener("storage", updateUserFromToken);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("storage", updateUserFromToken);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition duration-300">
              QueryNest
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</Link>
            <Link to="/blogs" className="text-gray-700 hover:text-indigo-600 font-medium">Blogs</Link>
            <Link to="/categories" className="text-gray-700 hover:text-indigo-600 font-medium">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</Link>
          </div>

          {/* Search and User/Profile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search blogs..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 w-64"
              />
            </div>

            {/* Conditional User/Login UI */}
            {user ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center text-sm text-gray-700 hover:text-indigo-600 focus:outline-none">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://avatars.githubusercontent.com/u/159447108?s=130&v=4"
                    alt="User"
                  />
                  <span className="ml-2 font-medium">{user.username}</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Profile</Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Settings</Link>
                    <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-indigo-50">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signup" className="text-indigo-600 hover:text-indigo-700 font-medium">Sign Up</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
