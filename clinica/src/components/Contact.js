import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Telefone" />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit" className="btn-primary">Enviar</button>
      </form>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed..." title="Mapa da clínica" />
      </div>
    </section>
  );
};

export default Contact;
