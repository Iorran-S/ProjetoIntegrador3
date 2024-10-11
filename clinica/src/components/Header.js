import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Estética Martins</div>
      <nav className="nav">        
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
            </ul>              
      </nav>
      <button className="btn-agendar">Agendar Consulta</button>
    </header>
  );
};

export default Header;
