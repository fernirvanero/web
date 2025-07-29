import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Benefits from '@/components/landing/Benefits';
import Testimonials from '@/components/landing/Testimonials';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;