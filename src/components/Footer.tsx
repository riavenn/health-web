import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
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
              <li><Link href="/hizmetler/kardiyoloji" className="text-gray-400 hover:text-white">Kardiyoloji</Link></li>
              <li><Link href="/hizmetler/noroloji" className="text-gray-400 hover:text-white">Nöroloji</Link></li>
              <li><Link href="/hizmetler/ortopedi" className="text-gray-400 hover:text-white">Ortopedi</Link></li>
              <li><Link href="/hizmetler/pediatri" className="text-gray-400 hover:text-white">Pediatri</Link></li>
              <li><Link href="/hizmetler/dermatoloji" className="text-gray-400 hover:text-white">Dermatoloji</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
              <li><Link href="/doktorlarimiz" className="text-gray-400 hover:text-white">Doktorlarımız</Link></li>
              <li><Link href="/iletisim" className="text-gray-400 hover:text-white">İletişim</Link></li>
              <li><Link href="/randevu-al" className="text-gray-400 hover:text-white">Randevu Al</Link></li>
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