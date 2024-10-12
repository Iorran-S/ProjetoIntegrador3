import React from 'react';

const AboutUs = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h3>O que Nossos Clientes Dizem</h3>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <blockquote>
            <p>
              "Os tratamentos na Clínica Estética Martins mudaram minha vida! A equipe é incrível, sempre atenciosa e pronta para atender. Sinto-me renovada a cada visita e recomendo a todos que procuram qualidade e cuidado!"
            </p>
            <footer>- Ana S., Cliente Satisfeita</footer>
          </blockquote>
        </div>
        <div className="testimonial-card">
          <blockquote>
            <p>
              "Nunca imaginei que pudesse me sentir tão bem com minha própria pele. A Clínica Estética Martins é o lugar ideal para quem quer resultados de verdade e um atendimento que te faz sentir em casa."
            </p>
            <footer>- João P., Cliente Satisfeito</footer>
          </blockquote>
        </div>
      </div>
      <div className="agendamento">
        <p>
          Venha fazer um orçamento conosco e descubra como podemos ajudar você a alcançar seus objetivos estéticos. Nossa equipe está pronta para oferecer um atendimento exclusivo e indicar os tratamentos mais adequados para você. Entre em contato e agende uma consulta para conhecer nosso espaço e nossos serviços de perto!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
