// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmployeeAuthModal from './components/EmployeeAuthModal';
import PricingReportsModal from './components/PricingReportsModal';
import axios from 'axios';
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
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showReportsModal, setShowReportsModal] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);

  // Verificar autenticação ao carregar
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/auth/check');
        setIsEmployee(response.data.isAuthenticated);
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      }
    };
    checkAuth();
  }, []);

  const handleEmployeeAccess = () => {
    if (isEmployee) {
      setShowReportsModal(true);
    } else {
      setShowAuthModal(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsEmployee(true);
    setShowAuthModal(false);
    setShowReportsModal(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Header onEmployeeAccess={handleEmployeeAccess} isEmployee={isEmployee} />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Footer />
              </>
            } />
          </Routes>
        </main>

        {showAuthModal && (
          <EmployeeAuthModal
            onAuthSuccess={handleAuthSuccess}
            onClose={() => setShowAuthModal(false)}
          />
        )}

        {showReportsModal && (
          <PricingReportsModal
            onClose={() => setShowReportsModal(false)}
          />
        )}
      </div>
    </Router>
  );
};

export default App;