'use client';

import React from 'react';

const services = [
  'Kardiyoloji',
  'Nöroloji',
  'Ortopedi',
  'Pediatri',
  'Dermatoloji',
  'Göz Hastalıkları',
];

interface ContactFormProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Bize Ulaşın</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Aşağıdaki formu doldurarak randevu talep edebilir veya sorularınızı bize iletebilirsiniz.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input
                type="text"
                placeholder="İsim Soyisim"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder:text-gray-500"
              />
                            <input
                type="tel"
                placeholder="Telefon Numarası"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder:text-gray-500"
              />
            </div>
            <div className="mb-6">
                            <input
                type="email"
                placeholder="E-posta Adresi"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder:text-gray-500"
              />
            </div>
            <div className="mb-6">
                            <select
                defaultValue=""
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 text-base"
              >
                <option value="" disabled>
                  Hizmet Türü Seçiniz
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;