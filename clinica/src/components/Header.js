// components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Se estamos na página principal, usa âncoras
  const isHomePage = location.pathname === '/';

  return (
    <header>
      <div className="logo"></div>   
      <nav className="nav"> 
        <ul> 
          <li>
            {isHomePage ? (
              <a className="btn-slice" href="#home">Home</a>
            ) : (
              <Link className="btn-slice" to="/#home">Home</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a className="btn-slice" href="#about">Sobre</a>
            ) : (
              <Link className="btn-slice" to="/#about">Sobre</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a className="btn-slice" href="#services">Serviços</a>
            ) : (
              <Link className="btn-slice" to="/#services">Serviços</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a className="btn-slice" href="#testimonials">Depoimentos</a>
            ) : (
              <Link className="btn-slice" to="/#testimonials">Depoimentos</Link>
            )}
          </li>
          <li>
            {isHomePage ? (
              <a className="btn-slice" href="#contact">Contato</a>
            ) : (
              <Link className="btn-slice" to="/#contact">Contato</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;