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
import ContactForm from '../components/ContactForm';

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null!);
  const servicesRef = useRef<HTMLDivElement>(null!);
    const doctorsRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);

  return (
    <main>
      <TopBar />
            <Navbar
        welcomeRef={welcomeRef}
        servicesRef={servicesRef}
        doctorsRef={doctorsRef}
        contactRef={contactRef}
      />
      <Header servicesRef={servicesRef} />
      <Welcome welcomeRef={welcomeRef} />
      <Services servicesRef={servicesRef} />
      <Doctors doctorsRef={doctorsRef} />
            <Testimonials />
      <ContactForm contactRef={contactRef} />
            <Footer
        welcomeRef={welcomeRef}
        servicesRef={servicesRef}
        doctorsRef={doctorsRef}
      />
    </main>
  );
}
