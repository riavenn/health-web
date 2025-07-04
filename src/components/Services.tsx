import React from 'react';
import Image from 'next/image';

const services = [
  {
    name: 'Kardiyoloji',
    description: 'Kalp ve damar hastalıklarının tanı ve tedavisi.',
    imageUrl: 'https://i.ibb.co/8LCzvtLt/pexels-cristian-rojas-8460088-min.jpg'
  },
  {
    name: 'Nöroloji',
    description: 'Beyin, sinir sistemi ve kas hastalıkları üzerine odaklanır.',
    imageUrl: 'https://images.pexels.com/photos/6011602/pexels-photo-6011602.jpeg'
  },
  {
    name: 'Ortopedi',
    description: 'Kas ve iskelet sistemi rahatsızlıklarının tedavisi.',
    imageUrl: 'https://images.pexels.com/photos/32752500/pexels-photo-32752500.jpeg'
  },
  {
    name: 'Pediatri',
    description: 'Çocuk sağlığı ve hastalıkları ile ilgilenen tıp dalı.',
    imageUrl: 'https://images.pexels.com/photos/8260438/pexels-photo-8260438.jpeg'
  },
  {
    name: 'Dermatoloji',
    description: 'Cilt, saç ve tırnak hastalıklarının tanı ve tedavisi.',
    imageUrl: 'https://images.pexels.com/photos/29648626/pexels-photo-29648626.jpeg'
  },
  {
    name: 'Göz Hastalıkları',
    description: 'Göz sağlığı ve görme bozukluklarının tedavisi.',
    imageUrl: 'https://images.pexels.com/photos/6749787/pexels-photo-6749787.jpeg'
  },
];

interface ServicesProps {
  servicesRef: React.RefObject<HTMLDivElement>;
}

const Services: React.FC<ServicesProps> = ({ servicesRef }) => {
  return (
    <section ref={servicesRef} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Hizmetlerimiz</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Alanında uzman hekimlerimizle, en güncel teknolojileri kullanarak geniş bir yelpazede sağlık hizmeti sunuyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
              <div className="relative h-56">
                <Image src={service.imageUrl} alt={service.name} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-500 font-semibold hover:underline">Daha Fazla Bilgi &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;