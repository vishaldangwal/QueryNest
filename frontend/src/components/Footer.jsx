import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About QueryNest</h2>
            <p className="text-gray-400">
              QueryNest is a platform designed to help developers find answers to their coding questions quickly and efficiently.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-white">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/terms" className="hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QueryNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;