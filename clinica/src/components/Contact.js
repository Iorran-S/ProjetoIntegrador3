import React, {useState} from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handlechange = (e) => {
    const {name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
    .then(response => {
      console.log('Contato Salvo', response.data);
  })
  .catch(error => {
    console.error('Erro ao salvar contato', error);
  });
};

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
