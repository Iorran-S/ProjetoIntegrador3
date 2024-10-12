import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa os estilos do Swiper

const servicesData = [
  { 
    name: "Microagulhamento", 
    description: "Revitalize seu sorriso.",
    image: "imagens/bigode_chines.jpg" // Caminho corrigido
  },
  { 
    name: "Toxína Botulínica",
    description: "Trate rugas e linhas de expressão.",
    image: "imagens/botox.jpg"
  },
  { 
    name: "Harmonização Facial",
    description: "Harmonize suas curvas.",
    image: "imagens/harmonização_facial.jpg"
  },
  { 
    name: "Jato de Plasma",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento_labial.jpg"
  },
  { 
    name: "Micropigmentação Labial",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento_labial.jpg"
  },
  { 
    name: "Rinomodelação",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento_labial.jpg"
  },
  { 
    name: "Hidrolipoclasia não aspirativa",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento_labial.jpg"
  },
  { 
    name: "Lipoenzimáticas",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento_labial.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <Swiper
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
                <button className="btn-secondary">Saiba Mais</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
