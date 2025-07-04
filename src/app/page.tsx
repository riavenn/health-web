'use client';

import React, { useRef } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
  const doctorsRef = useRef<HTMLDivElement>(null!);

  return (
    <main>
      <TopBar />
      <Navbar
        welcomeRef={welcomeRef}
        servicesRef={servicesRef}
        doctorsRef={doctorsRef}
      />
      <Header servicesRef={servicesRef} />
      <Welcome welcomeRef={welcomeRef} />
      <Services servicesRef={servicesRef} />
      <Doctors doctorsRef={doctorsRef} />
      <Testimonials />
      <Footer />
    </main>
  );
}
