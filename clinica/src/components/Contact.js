import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Agende sua Consulta!</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nome" required className="form-input" />
        <input type="email" placeholder="Email" required className="form-input" />
        <input type="tel" placeholder="Telefone" className="form-input" />
        <textarea placeholder="Mensagem" required className="form-textarea"></textarea>
        <button type="submit" className="btn-primary">Enviar</button>
      </form>
      <div className="map">
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.799374254432!2d-46.579248985492215!3d-23.539518784692177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5fb86a992a47%3A0xd739c7a838f12687!2sR.%20Bom%20Sucesso%2C%20220%20-%20conjunto%201702%20-%20Cidade%20M%C3%A3e%20do%20C%C3%A9u%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003305-000!5e0!3m2!1spt-BR!2sbr!4v1728610847080!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Contact;
