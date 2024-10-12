import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <h2>Sobre Nós</h2>
      <p>Somos uma clínica de estética dedicada a oferecer tratamentos personalizados com uma equipe altamente qualificada.</p>
      <img src="equipe.jpg" alt="Equipe da clínica" />
      
      <h3>Nossa História</h3>
      <p>A Clínica Estética Martins foi fundada em [ano] com o objetivo de transformar a vida das pessoas através da beleza e autoestima.</p>

      <h3>Nossos Serviços</h3>
      <ul>
        <li>Tratamentos Faciais</li>
        <li>Tratamentos Corporais</li>
        <li>Depilação a Laser</li>
        <li>Massagens Relaxantes</li>
      </ul>

      <h3>O que Nossos Clientes Dizem</h3>
      <blockquote>
        <p>"Os tratamentos na Clínica Estética Martins mudaram minha vida! A equipe é incrível!" - Cliente Satisfeito</p>
      </blockquote>

      <h3>Nossa Equipe</h3>
      <div className="team-members">
        <div className="member">
          <img src="membro1.jpg" alt="Membro 1" />
          <h4>Nome do Membro 1</h4>
          <p>Especialização: [especialidade]</p>
        </div>
        {/* Adicione mais membros conforme necessário */}
      </div>

      <h3>Agende uma Consulta</h3>
      <p>Entre em contato conosco para agendar uma consulta e conhecer nossos tratamentos personalizados!</p>
    </section>
  );
};

export default AboutUs;
