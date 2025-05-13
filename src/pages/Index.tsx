
import React from 'react';
import Navbar from '@/components/Navbar.tsx';
import Hero from '@/components/Hero.tsx';
import Services from '@/components/Services.tsx';
import About from '@/components/About.tsx';
import Testimonials from '@/components/Testimonials.tsx';
import Contact from '@/components/Contact.tsx';
import Footer from '@/components/Footer.tsx';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
