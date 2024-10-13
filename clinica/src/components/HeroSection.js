import React, { useEffect, useState } from 'react';

const images = [
  'imagens/atendimentos/atendimento (1).jpg',
  'imagens/atendimentos/atendimento (2).jpg',
  'imagens/atendimentos/atendimento (3).jpg',
  'imagens/atendimentos/atendimento (4).jpg',
  'imagens/atendimentos/atendimento (5).jpg',
  'imagens/atendimentos/atendimento (6).jpg',
  'imagens/atendimentos/atendimento (7).jpg',
  'imagens/atendimentos/atendimento (8).jpg',
  'imagens/atendimentos/atendimento (9).jpg',
  'imagens/atendimentos/atendimento (10).jpg',
  'imagens/atendimentos/atendimento (11).jpg',
  'imagens/atendimentos/atendimento (12).jpg',
  'imagens/atendimentos/atendimento (13).jpg',
  'imagens/atendimentos/atendimento (14).jpg',
  'imagens/atendimentos/atendimento (15).jpg',
  'imagens/atendimentos/atendimento (16).jpg',
  'imagens/atendimentos/atendimento (17).jpg',
  'imagens/atendimentos/atendimento (18).jpg',
  'imagens/atendimentos/atendimento (19).jpg',
  'imagens/atendimentos/atendimento (20).jpg',
  'imagens/atendimentos/atendimento (21).jpg',
  'imagens/atendimentos/atendimento (22).jpg',
  'imagens/atendimentos/atendimento (23).jpg',
  'imagens/atendimentos/atendimento (24).jpg',
  'imagens/atendimentos/atendimento (25).jpg',
  'imagens/atendimentos/atendimento (26).jpg',
  'imagens/atendimentos/atendimento (27).jpg',
  'imagens/atendimentos/atendimento (28).jpg',
  'imagens/atendimentos/atendimento (29).jpg',
  'imagens/atendimentos/atendimento (30).jpg',
  'imagens/atendimentos/atendimento (31).jpg'
];


const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Realce Sua Beleza Natural</h1>
        <p>Tratamentos Estéticos Personalizados para Você</p>
        <a className="btn-slice2" href="#services">Serviços</a>
      </div>
      <div className="market">
        <div className="card">
          <img src={images[currentImage]} alt={`Imagem ${currentImage + 1}`} className="card-image" />
        </div>
      </div>
      <a className="btn-agendar" href="#contact">Agendar Consulta</a>
    </section>
  );
};

export default HeroSection;
