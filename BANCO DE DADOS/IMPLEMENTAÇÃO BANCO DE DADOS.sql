CREATE DATABASE `ESTETICA MARTINS`;

USE `ESTETICA MARTINS`;

CREATE TABLE SERVICOS
(
	id INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE FUNCIONARIOS (
    id INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(100) NOT NULL UNIQUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE CLIENTES
(
    id INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fone VARCHAR(255) NOT NULL,
    mensagem TEXT NOT NULL,
    primary key(id)
);

CREATE TABLE AGENDAMENTOS (
    id INT AUTO_INCREMENT,
    funcionario_id INT NOT NULL,
    cliente_id INT NOT NULL,
    servico_id INT NOT NULL,
    agendamento_date DATE NOT NULL,
    abertura_time TIME NOT NULL,
    final_time TIME NOT NULL,
    status VARCHAR(255) NOT NULL DEFAULT 'pendente', -- status pode ser: pendente, confirmado, agendado
    PRIMARY KEY (id),
    FOREIGN KEY (funcionario_id) REFERENCES FUNCIONARIOS(id),
    FOREIGN KEY (cliente_id) REFERENCES CLIENTES(id),
    FOREIGN KEY (servico_id) REFERENCES SERVICOS(id)
);

CREATE VIEW RESUMO_SERVICOS AS
SELECT 
    nome AS 'Procedimento',
    MIN(preco) AS 'Menor Preço',
    MAX(preco) AS 'Maior Preço',
    AVG(preco) AS 'Média de Preços',
    COUNT(id) AS 'Total de Serviços'
FROM SERVICOS
GROUP BY nome;