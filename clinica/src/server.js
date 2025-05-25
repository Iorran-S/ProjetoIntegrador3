require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const app = express();

// Configuração do CORS para produção/desenvolvimento
app.use(cors({
  origin: [
    process.env.FRONTEND_URL, 
    'http://localhost:3000'
  ],
  credentials: true
}));

app.use(session({
  store: new pgSession({
    conString: process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/db'
  }),
  secret: process.env.SESSION_SECRET || 'fallback_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 dias
  }
}));

// Conexão PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Obrigatório no Render
  }
});

// Teste de conexão (opcional)
pool.query('SELECT NOW()')
  .then(res => console.log('Conexão com PostgreSQL OK:', res.rows[0]))
  .catch(err => console.error('Erro na conexão:', err));


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