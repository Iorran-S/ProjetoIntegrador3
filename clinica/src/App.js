import React from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import Services from '../src/components/Services';
import AboutUs from '../src/components/AboutUs';
import Testimonials from '../src/components/Testimonials';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import '../src/index.css';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
