import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  welcomeRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  doctorsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ welcomeRef, servicesRef, doctorsRef, contactRef }) => {
  const navLinks = [
    { name: "Anasayfa", ref: null },
    { name: "Hakkımızda", ref: welcomeRef },
    { name: "Hizmetler", ref: servicesRef },
    { name: "Doktorlarımız", ref: doctorsRef },
    { name: "İletişim", ref: contactRef },
  ];

  const handleScroll = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (!ref) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src="https://i.ibb.co/QFDHDnKK/1.png" alt="Nismed Logo" width={50} height={50} className="mr-3" />
          <span className="text-2xl font-bold text-blue-600">NISMED</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.ref)}
              className="text-gray-600 hover:text-blue-500 transition duration-300 bg-transparent border-none cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={() => handleScroll(contactRef)}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Randevu Al
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;