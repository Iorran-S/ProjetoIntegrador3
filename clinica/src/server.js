require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
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

// Conexão PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Configuração de sessão com PostgreSQL
app.use(session({
  store: new pgSession({
    pool: pool,  // Usando a mesma conexão do pool
    tableName: 'user_sessions'  // Nome da tabela para armazenar sessões
  }),
  secret: process.env.SESSION_SECRET || 'fallback_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 dias
  }
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

// Teste de conexão
pool.connect()
  .then(client => {
    console.log('Conectado ao PostgreSQL com sucesso!');
    client.release();
  })
  .catch(err => {
    console.error('Erro na conexão com PostgreSQL:', err);
    process.exit(1);
  });

// Rotas
app.post('/api/contact', async (req, res) => {
  // Implementação da rota de contato
});

app.post('/api/auth/login', async (req, res) => {
  // Implementação da rota de login
});

// Rota fallback para o React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Inicia o servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});