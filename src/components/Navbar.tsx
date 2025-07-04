import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const navLinks = ["Anasayfa", "Hakkımızda", "Hizmetler", "Doktorlarımız", "İletişim"];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-3" /> */}
          <span className="text-2xl font-bold text-gray-800">NISMED</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link} href={`/${link.toLowerCase()}`} className="text-gray-600 hover:text-blue-500 transition duration-300">
              {link}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/randevu-al" className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Randevu Al
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;