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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', formData)
    .then(response => {
      console.log('Contato Salvo', response.data);
      alert('Agendamento efetuado com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao salvar contato', error);
    alert('Erro ao enviar o agendamento!')
  });
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
           onChange={handlechange}
        />

        <input 
           type="email"
           name="email"
           placeholder="Email"
           required
           className="form-input"
           value={formData.email}
           onChange={handlechange}
        />
           
        <input
           type="tel"
           name="telefone"
           placeholder="Telefone"
           className="form-input"
           value={formData.telefone}
           onChange={handlechange}
        />

        <textarea
            name="mensagem"
            placeholder="Mensagem" 
            required
            className="form-textarea"
            value={formData.mensagem}
            onChange={handlechange}  
        />
        <button type="submit" className="btn-primary">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
