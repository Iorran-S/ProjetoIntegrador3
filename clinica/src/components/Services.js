import React from 'react';

const servicesData = [
  { 
    name: "Preenchimento de Bigode Chines", 
    description: "Revitalize seu sorriso.",
    image: "imagens/bigode chines.jpg" // Caminho corrigido
  },
  { name: "Botox", 
    description: "Trate rugas e linhas de expressão.",
    image:  "imagens/botox.jpg"
  },
  { name: "Harmonização Facial",
    description: "Harmonize suas curvas.",
    image:"imagens/harmonização facial.jpg"
  },
  { name: "Preenchimento Labial",
    description: "Resultados duradouros.",
    image: "imagens/preenchimento labial.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div 
            className="service-card" 
            key={index}
            style={{ backgroundImage: `url(${service.backgroundImage})` }} // Aplica a imagem de fundo
          >
            {service.image && (
              <img 
                src={service.image} 
                alt={service.name} 
                className="service-image" 
              />
            )}
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button className="btn-secondary">Saiba Mais</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
