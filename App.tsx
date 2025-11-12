import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import DesignGeneratorPage from './pages/DesignGeneratorPage';
import ConsultationPage from './pages/ConsultationPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/why-us" element={<WhyChooseUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/design-generator" element={<DesignGeneratorPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;