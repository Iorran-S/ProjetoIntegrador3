import React, { useEffect, useState } from 'react';

const images = [

  'imagens/atendimento1.jpg', // Adicione os caminhos corretos para suas imagens
  'imagens/atendimento2.jpg',
  'imagens/atendimento3.jpg',
  'imagens/atendimento4.jpg'
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
