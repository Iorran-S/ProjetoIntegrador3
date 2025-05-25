// src/components/PricingReportsModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PricingReportsModal = ({ onClose }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/admin/pricing-reports');
        setReports(response.data);
      } catch (err) {
        setError('Erro ao carregar relatórios');
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content wide">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Relatórios de Precificação</h2>
        
        {loading ? (
          <p>Carregando relatórios...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="report-table-container">
            <table>
              <thead>
                <tr>
                  <th>Procedimento</th>
                  <th>Menor Preço</th>
                  <th>Maior Preço</th>
                  <th>Média</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.Procedimento}</td>
                    <td>R$ {report['Menor Preço'].toFixed(2)}</td>
                    <td>R$ {report['Maior Preço'].toFixed(2)}</td>
                    <td>R$ {report['Média de Preços'].toFixed(2)}</td>
                    <td>{report['Total de Serviços']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingReportsModal;