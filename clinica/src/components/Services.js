import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper

const servicesData = [
  { 
    name: "Microagulhamento", 
    description: "Revitalize seu sorriso.",
    image: "imagens/microagulhamento.jpg" // Caminho corrigido
  },
  { 
    name: "Toxína Botulínica",
    description: "Trate rugas e linhas de expressão.",
    image: "imagens/botox.jpg"
  },
  { 
    name: "Harmonização Facial",
    description: "Harmonize suas curvas.",
    image: "imagens/harmonizacao.jpg"
  },
  { 
    name: "Preenchimento Labial",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento_labial.jpg"
  },
  { 
    name: "Jato de Plasma",
    description: "Resultados duradouros.",
    image: "imagens/jato_de_plasma.jpg"
  },
  { 
    name: "Micropigmentação Labial",
    description: "Resultados duradouros.",
    image: "imagens/micropigmentacao.jpg"
  },
  { 
    name: "Rinomodelação",
    description: "Resultados duradouros.",
    image: "imagens/rinomodelacao.jpg"
  },
  { 
    name: "Hidrolipoclasia Não Aspirativa",
    description: "Resultados duradouros.",
    image: "imagens/hidrolipoclasia.jpg"
  },
  { 
    name: "Tratamento Capilar",
    description: "Resultados duradouros.",
    image: "imagens/tratamento_capilar.jpg"
  },
  { 
    name: "Bioestimulador de Colágeno",
    description: "Resultados duradouros.",
    image: "imagens/bioestimulador.jpg"
  },
  { 
    name: "Lipoenzimáticas",
    description: "Resultados duradouros.",
    image: "imagens/lipoenzimaticas.jpg"
  },
  { 
    name: "Revitalização Facial",
    description: "Resultados duradouros.",
    image: "imagens/revitalizacao.jpg"
  }
];

const Services = () => {
  const swiperRef = useRef(null); // Cria uma referência para o Swiper

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev(); // Move para o slide anterior
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext(); // Move para o próximo slide
  };

  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <Swiper
        ref={swiperRef} // Adiciona a referência ao Swiper
        spaceBetween={20}
        slidesPerView={1} // Número de slides visíveis em telas pequenas
        breakpoints={{
          640: {
            slidesPerView: 2, // Número de slides visíveis em telas médias
          },
          768: {
            slidesPerView: 3, // Número de slides visíveis em telas grandes
          },
          1024: {
            slidesPerView: 4, // Número de slides visíveis em telas extra grandes
          },
        }}
      >
      {servicesData.map((service, index) => (
        <SwiperSlide key={index}>
          <div 
            className="service-card" 
            style={{ 
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <button className="btn-slice3">Saiba Mais</button>
          </div>
        </SwiperSlide>
      ))}

      </Swiper>
      <div className="navigation-buttons">
        <button className="cta" onClick={handlePrev}>
          <span>←</span>
        </button>
        <button className="cta" onClick={handleNext}>
          <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Services;
