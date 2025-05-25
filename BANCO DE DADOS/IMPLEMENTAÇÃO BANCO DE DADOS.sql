-- Criação do banco (não necessário no Render, ele já cria)
-- USE não é necessário no PostgreSQL, você se conecta diretamente ao DB

CREATE TABLE servicos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

CREATE TABLE funcionarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(100) NOT NULL UNIQUE,
  data_criacao TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  fone VARCHAR(255) NOT NULL,
  mensagem TEXT NOT NULL
);

CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  funcionario_id INT NOT NULL REFERENCES funcionarios(id),
  cliente_id INT NOT NULL REFERENCES clientes(id),
  servico_id INT NOT NULL REFERENCES servicos(id),
  agendamento_date DATE NOT NULL,
  abertura_time TIME NOT NULL,
  final_time TIME NOT NULL,
  status VARCHAR(255) NOT NULL DEFAULT 'pendente'
);

CREATE OR REPLACE VIEW resumo_servicos AS
SELECT 
  nome AS procedimento,
  MIN(preco) AS menor_preco,
  MAX(preco) AS maior_preco,
  AVG(preco) AS media_precos,
  COUNT(id) AS total_servicos
FROM servicos
GROUP BY nome;