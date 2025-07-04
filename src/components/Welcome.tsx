import React from 'react';
import Image from 'next/image';

const Welcome: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96">
          <div className="absolute top-0 left-0 w-3/4 h-3/4">
            <Image
              src="https://i.ibb.co/FqdY2Jhz/2149941467-min.jpg"
              alt="Clinic Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 z-10">
            <Image
              src="https://i.ibb.co/Y482zYGp/2149941460-min.jpg"
              alt="Clinic Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hastanemize Hoşgeldiniz</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
            pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
            Donec scelerisque sollicitudin enim eu venenatis.
          </p>
          <p className="text-gray-600">
            Duis ut dictum metus, eu egestas ipsum. Integer vel rutrum ex. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Donec eget efficitur ex.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;