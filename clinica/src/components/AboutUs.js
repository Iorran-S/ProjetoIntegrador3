import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <h2>Sobre Nós</h2>
      <p>
        Somos a Clínica Estética Martins, um espaço dedicado a cuidar da sua beleza e bem-estar.
        </p>
        <p>
        Nosso compromisso é oferecer tratamentos personalizados que atendam às suas necessidades, sempre com uma equipe altamente qualificada e apaixonada pelo que faz. Aqui, acreditamos que cada cliente é único e merece um atendimento especial, que vai além das expectativas.
      </p>

      <h3>Nossa História</h3>
      <p>
        Fundada em 2022, a Clínica Estética Martins nasceu com a missão de transformar a vida das pessoas através de tratamentos estéticos de qualidade.
        <blockquote>
        Somos referência em nossa região por oferecer um atendimento humanizado e resultados que elevam a autoestima de nossos clientes. Cada passo de nossa trajetória foi marcado por inovação, profissionalismo e o desejo de fazer a diferença na vida de quem confia em nosso trabalho.
        </blockquote>
      </p>

      <h3>Quem sou eu</h3>
      <div className="team-members">
      <div className="member">
        <img src="imagens/amanda.png" alt="Membro 1" />
      </div>
        <div className="member">
        <h4>Dra. Amanda Martins</h4>
        <p>Especialização: Enfermagem e Estética Avançada</p>
        <p>
        <blockquote>
          Com mais de 14 anos de experiência, na área de saúde Dra. Maria é referência em tratamentos faciais e rejuvenescimento, trazendo sempre as últimas novidades do mercado para a clínica.
        </blockquote>
        </p>
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
