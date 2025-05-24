import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [servicesSummary, setServicesSummary] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:5000/api/services/summary', {
          headers: { Authorization: token } // Sem o prefixo Bearer
        });
        setServicesSummary(response.data);
      } catch (err) {
        setError('Erro ao carregar dados');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/admin';
  };

  if (loading) return <div className="dashboard-loading">Carregando dados...</div>;
  if (error) return <div className="dashboard-error">{error}</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard Administrativo</h1>
        <button onClick={handleLogout} className="dashboard-logout-btn">
          Sair
        </button>
      </header>

      <section className="dashboard-summary">
        <h2>Resumo de Serviços</h2>
        
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Procedimento</th>
              <th>Menor Preço</th>
              <th>Maior Preço</th>
              <th>Média</th>
              <th>Total Realizados</th>
            </tr>
          </thead>
          <tbody>
            {servicesSummary.map((service, index) => (
              <tr key={index}>
                <td>{service.Procedimento}</td>
                <td>R$ {service['Menor Preço'].toFixed(2)}</td>
                <td>R$ {service['Maior Preço'].toFixed(2)}</td>
                <td>R$ {service['Média de Preços'].toFixed(2)}</td>
                <td>{service['Total de Serviços']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;