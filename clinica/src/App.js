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
    <div className="container">
      <Header />
      <HeroSection className="section" />
      <Services className="section" />
      <AboutUs className="section" />
      <Testimonials className="section" />
      <Contact className="section" />
      <Footer className="section" />
    </div>
  );
};

export default App;

