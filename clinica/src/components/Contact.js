import React, { useState } from 'react';

const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `Olá! Gostaria de agendar uma consulta.\n\n*Nome:* ${formData.nome}\n*Email:* ${formData.email}\n*Telefone:* ${formData.telefone}\n\n*Mensagem:* ${formData.mensagem}`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Redireciona para o WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <h2>Agende sua Consulta!</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text"
          name="nome"
          placeholder="Nome"
          required
          className="form-input"
          value={formData.nome}
          onChange={handleChange}
        />

        <input 
          type="email"
          name="email"
          placeholder="Email"
          required
          className="form-input"
          value={formData.email}
          onChange={handleChange}
        />
           
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          required
          className="form-input"
          value={formData.telefone}
          onChange={handleChange}
        />

        <textarea
          name="mensagem"
          placeholder="Mensagem" 
          required
          className="form-textarea"
          value={formData.mensagem}
          onChange={handleChange}  
        />
        
        <button type="submit" className="btn-slice3">
          <div className="bottom">
            <span>Enviar para WhatsApp</span>
          </div>
        </button>
      </form>
    </section>
  );
};

export default Contact;