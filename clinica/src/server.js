const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'estetica martins'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para contato
app.post('/api/contact', (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;
    const query = 'INSERT INTO clientes (nome, email, fone, mensagem) VALUES (?, ?, ?, ?)';

    db.query(query, [nome, email, telefone, mensagem], (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Erro ao salvar contato');
            return;
        }
        res.status(200).send('Contato salvo com sucesso!');
    });
});

// Rotas
const authRoutes = require('./routes/auth.routes');
const adminRoutes = require('./routes/admin.routes');
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const port = 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
