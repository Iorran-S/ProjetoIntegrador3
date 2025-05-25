require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');
const cors = require('cors');

const app = express();

// Configuração do CORS para produção/desenvolvimento
app.use(cors({
  origin: [
    process.env.FRONTEND_URL, 
    'http://localhost:3000'
  ],
  credentials: true
}));

// Configuração de sessão (com PostgreSQL no Render)
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Conexão com MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME.replace(/\s+/g, '_'), // Remove espaços
  waitForConnections: true,
  connectionLimit: 10
});

// Middleware para servir o frontend
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());

// Suas rotas existentes (login, contato, etc.) permanecem iguais
app.post('/api/contact', async (req, res) => { /* ... */ });
app.post('/api/auth/login', async (req, res) => { /* ... */ });

// Rota fallback para o React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia o servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);1
  console.log(`Banco: ${process.env.DB_NAME}`);
});