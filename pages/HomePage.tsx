import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import DesignGenerator from '../components/DesignGenerator';
import ContactForm from '../components/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <DesignGenerator />
      <ContactForm />
    </>
  );
};

export default HomePage;
