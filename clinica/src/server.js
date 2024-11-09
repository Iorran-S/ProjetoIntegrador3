/*const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Conferir a documentação da conexão
const db = mysql.createConnection({
    host: '3306',
    user:'root',
    password:'123456',
    database:'estetica martins'    
});

db.connect(err => {
    if (err) {
        console.error('Erro de conexão com MySQL:', err);
        return;
    }
    console.log('Banco Conectado');
});

app.post('/api/contact', (req, res) => {
    const {nome, email, telefone, mensagem } = req.body;
    const query = 'INSERT INTO TO CLIENTES (nome, email, fone, mensagem) VALUES (?, ?, ?, ?)';
    db.query(query, [nome, email, telefone, mensagem], (err, result) =>{
        if (err){
            console.error('Erro ao inserir dados:', err);
            res.status(500).send('Error insert data');
            return;
        }
        res.status(200).send('Contato salvo!');
    });
});

const port = 5000;
app.listen(port, () => console.log(`Servidor rodando na port ${port}`));
*/

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados
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

// Rota para salvar os dados de contato
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

const port = 5000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
