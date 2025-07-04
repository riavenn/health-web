import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-100 p-2 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2" />
            <span>info@healthproject.com</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaPhone className="mr-2" />
            <span>+90 123 456 7890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;