import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface FooterProps {
  welcomeRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  doctorsRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ welcomeRef, servicesRef, doctorsRef }) => {
  const handleScroll = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else if (!ref) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Anasayfa", ref: null },
    { name: "Hakkımızda", ref: welcomeRef },
    { name: "Hizmetler", ref: servicesRef },
    { name: "Doktorlarımız", ref: doctorsRef },
  ];

  const servicesLinks = [
    'Kardiyoloji',
    'Nöroloji',
    'Ortopedi',
    'Pediatri',
    'Dermatoloji',
    'Göz Hastalıkları',
  ];
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo and Socials */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Health Project</h3>
            <p className="text-gray-400 mb-4">
              Sağlığınız için en doğru adres.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              {servicesLinks.map(service => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleScroll(link.ref)} 
                    className="bg-transparent border-none p-0 m-0 text-left text-gray-400 hover:text-white cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Sağlık Sokak, Şifa Mahallesi, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:info@healthproject.com" className="hover:text-white">info@healthproject.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <a href="tel:+901234567890" className="hover:text-white">+90 123 456 7890</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Health Project. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;