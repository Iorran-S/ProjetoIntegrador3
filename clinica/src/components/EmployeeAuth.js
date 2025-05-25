// src/components/EmployeeAuth.js
import { useState } from 'react';
import axios from 'axios';

const EmployeeAuth = ({ onAuthSuccess }) => {
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/employee/verify', { phone });
      if (response.data.isEmployee) {
        onAuthSuccess();
      } else {
        setError('Número não cadastrado como funcionário');
      }
    } catch (err) {
      setError('Erro na verificação');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="employee-auth-modal">
      <h3>Acesso Funcionário</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Seu telefone cadastrado"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Verificando...' : 'Acessar'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default EmployeeAuth;