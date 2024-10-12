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
    </section>
  );
};

export default Contact;
