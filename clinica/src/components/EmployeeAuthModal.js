// src/components/EmployeeAuthModal.js
import React, { useState } from 'react';
import axios from 'axios';

const EmployeeAuthModal = ({ onAuthSuccess, onClose }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/login', {
        phone,
        password
      });

      if (response.data.success) {
        onAuthSuccess();
      } else {
        setError(response.data.message || 'Credenciais inválidas');
      }
    } catch (err) {
      setError('Erro ao tentar autenticar');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Acesso Funcionário</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Telefone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu telefone cadastrado"
              required
            />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Autenticando...' : 'Acessar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeAuthModal;