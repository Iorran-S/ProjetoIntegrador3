import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper

const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

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
      ref={swiperRef}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
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
            <a 
              href={`https://wa.me/${phoneNumber}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20procedimento:%20*${encodeURIComponent(service.name)}*.%20Poderia%20me%20informar%20valores%20e%20disponibilidade?`}
              className="btn-slice3"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Agende Já
            </a>
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
