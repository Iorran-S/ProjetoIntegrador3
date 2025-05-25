// src/components/PricingReports.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const PricingReports = ({ onClose }) => {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/reports/pricing');
        setReports(response.data);
      } catch (err) {
        setError('Falha ao carregar relatórios');
      } finally {
        setLoading(false);
      }
    };
    
    fetchReports();
  }, []);

  return (
    <div className="report-modal-overlay">
      <div className="report-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Relatórios de Precificação</h2>
        
        {loading && <p>Carregando...</p>}
        {error && <p className="error">{error}</p>}
        
        {reports && (
          <div className="report-content">
            <h3>Resumo de Serviços</h3>
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
                    <td>{report['Menor Preço'].toFixed(2)}</td>
                    <td>{report['Maior Preço'].toFixed(2)}</td>
                    <td>{report['Média de Preços'].toFixed(2)}</td>
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

export default PricingReports;