'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const doctors = [
  { name: 'Dr. Ahmet Yılmaz', title: 'Kardiyolog', imageUrl: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg' },
  { name: 'Dr. Ayşe Kaya', title: 'Nörolog', imageUrl: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg' },
  { name: 'Dr. Mehmet Öztürk', title: 'Ortopedist', imageUrl: 'https://images.pexels.com/photos/26886763/pexels-photo-26886763.jpeg' },
  { name: 'Dr. Fatma Demir', title: 'Pediatrist', imageUrl: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg' },
  { name: 'Dr. Ali Vural', title: 'Dermatolog', imageUrl: 'https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg' },
  { name: 'Dr. Zeynep Şahin', title: 'Göz Doktoru', imageUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg' },
  { name: 'Dr. Mustafa Arslan', title: 'Genel Cerrah', imageUrl: 'https://images.pexels.com/photos/17686823/pexels-photo-17686823.jpeg' },
  { name: 'Dr. Emine Doğan', title: 'Psikiyatrist', imageUrl: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg' },
];

interface DoctorsProps {
  doctorsRef: React.RefObject<HTMLDivElement>;
}

const Doctors: React.FC<DoctorsProps> = ({ doctorsRef }) => {
  return (
        <section ref={doctorsRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Doktorlarımız</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Sağlığınızı emanet edebileceğiniz, alanında uzman ve deneyimli hekim kadromuzla tanışın.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="!pb-12"
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Doctors;