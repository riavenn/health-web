'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ayşe Y.',
    comment: 'Harika bir deneyimdi. Doktorlar çok ilgili ve bilgili. Herkese tavsiye ederim.',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
  },
  {
    name: 'Mehmet A.',
    comment: 'Temiz, modern bir hastane ve güler yüzlü personel. Tedavimden çok memnun kaldım.',
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    name: 'Fatma K.',
    comment: 'Randevu almak çok kolaydı ve bekleme süresi neredeyse hiç yoktu. Teşekkürler!',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  },
  {
    name: 'Ali C.',
    comment: 'Çocuğumun tedavisi süresince gösterdikleri sabır ve ilgi için tüm ekibe minnettarım.',
    imageUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
  },
  {
    name: 'Zeynep T.',
    comment: 'Teknolojik altyapıları ve uzman doktorları sayesinde sağlığıma kavuştum.',
    imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg'
  },
  {
    name: 'Mustafa B.',
    comment: 'Acil servisteki hızlı ve etkili müdahale için teşekkür ederim. Hayatımı kurtardılar.',
    imageUrl: 'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Hasta Yorumları</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hastalarımızın bizim hakkımızda ne düşündüğünü öğrenin.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-2xl mx-auto">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600 italic text-lg mb-4">"{testimonial.comment}"</p>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;