'use client';

import { url } from 'inspector';
import React from 'react';

interface HeaderProps {
  servicesRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ servicesRef }) => {
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/32213424/pexels-photo-32213424.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto text-white px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">Sağlığınız Bizim İçin Önemli</h1>
          <p className="text-lg mb-8">
            Modern tıbbın tüm olanaklarını kullanarak, uzman kadromuzla size en iyi sağlık hizmetini sunmak için buradayız.
          </p>
          <button
            onClick={handleScrollToServices}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Hizmetlerimize Göz At
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;