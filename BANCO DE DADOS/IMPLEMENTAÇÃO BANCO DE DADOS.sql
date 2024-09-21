CREATE DATABASE `ESTETICA MARTINS`;

USE `ESTETICA MARTINS`;

CREATE TABLE SERVICOS
(
	id INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    duracao INT NOT NULL, -- em minutos
    preco DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE FUNCIONARIOS
(
	id INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    funcao VARCHAR(255) NOT NULL, 
    primary key (id)
);

CREATE TABLE CLIENTES
(
	id INT AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fone VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
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
