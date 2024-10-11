import React from 'react';

const servicesData = [
  { 
    name: "Limpeza de Pele", 
    description: "Revitalize sua pele.",
    image: "imagens/limpeza de pele.jpg" // Caminho corrigido
  },
  { name: "Botox", 
    description: "Trate rugas e linhas de expressão.",
    image:  "imagens/botox.jpg"
  },
  { name: "Massagem Modeladora",
    description: "Tonifique o seu corpo.",
    image:"imagens/massagem_model1.jpg"
  },
  { name: "Depilação a Laser",
    description: "Resultados duradouros.",
    image: "imagens/depila_laser.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Nossos Serviços</h2>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            {/* Adicionando a imagem */}
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
