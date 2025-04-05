
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Impact from '@/components/Impact';
import Members from '@/components/Members';
import Testimonials from '@/components/Testimonials';
import Volunteer from '@/components/Volunteer';
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
      <Members />
      <Testimonials />
      <Volunteer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
