// components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Função para determinar o 'to' do Link
  const getLinkTo = (hash) => {
    // Se já estiver na página principal, usa apenas o hash
    if (location.pathname === '/') {
      return hash;
    }
    // Se estiver em outra página, redireciona para a página principal com o hash
    return `/${hash}`;
  };

  return (
    <header>
      <div className="logo"></div>   
      <nav className="nav"> 
        <ul> 
          <li><Link className="btn-slice" to={getLinkTo('#home')}>Home</Link></li>
          <li><Link className="btn-slice" to={getLinkTo('#about')}>Sobre</Link></li>
          <li><Link className="btn-slice" to={getLinkTo('#services')}>Serviços</Link></li>
          <li><Link className="btn-slice" to={getLinkTo('#testimonials')}>Depoimentos</Link></li>
          <li><Link className="btn-slice" to={getLinkTo('#contact')}>Contato</Link></li>
          <li><Link className="btn-slice" to="/admin" >Área de Funcionários</Link></li>
        </ul>
    </nav>
    </header>
  );
};

export default Header;