import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo"></div>   
      <nav className="nav"> 
        <ul> 
          <li><a className="btn-slice" href="#home">Home</a></li>
          <li><a className="btn-slice" href="#about">Sobre</a></li>
          <li><a className="btn-slice" href="#services">Serviços</a></li>
          <li><a className="btn-slice" href="#testimonials">Depoimentos</a></li>
          <li><a className="btn-slice" href="#contact">Contato</a></li>
        </ul>              
      </nav>
    </header>
  );
};

export default Header;
