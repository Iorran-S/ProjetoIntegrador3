// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const Home = () => (
  <>
    <HeroSection />
    <Services />
    <AboutUs />
    <Testimonials />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Footer />
              </>
            } />
            {/* Você pode adicionar outras rotas aqui */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;