
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Testimonials from '@/components/Testimonials';
import Donate from '@/components/Donate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Testimonials />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
