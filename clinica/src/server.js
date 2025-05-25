require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const path = require('path');
const cors = require('cors');

const app = express();

// Verificação crítica das variáveis de ambiente
if (!process.env.DATABASE_URL) {
  console.error('ERRO: DATABASE_URL não está definida!');
  process.exit(1);
}

// Configuração do CORS
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'http://localhost:3000'
  ],
  credentials: true
}));

// Configuração do Pool PostgreSQL com tratamento de erro melhorado
const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

const pool = new Pool(poolConfig);

// Configuração de sessão otimizada
const sessionConfig = {
  store: new pgSession({
    pool: pool,
    tableName: 'user_sessions',
    createTableIfMissing: true
  }),
  secret: process.env.SESSION_SECRET || 'segredo_temporario',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
};

app.use(session(sessionConfig));

// Middlewares essenciais
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../build')));


// Verificação de conexão robusta
pool.connect()
  .then(client => {
    console.log('✅ Conexão com PostgreSQL estabelecida com sucesso');
    return client.query('SELECT NOW()')
      .then(res => {
        console.log('⏱️ Data/hora do servidor PostgreSQL:', res.rows[0].now);
        client.release();
      });
  })
  .catch(err => {
    console.error('❌ Falha na conexão com PostgreSQL:', err);
    process.exit(1);
  });

// Rotas básicas de saúde
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    database: pool ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// Suas rotas de aplicação
app.post('/api/contact', async (req, res) => {
  // Implemente sua lógica aqui
});

app.post('/api/auth/login', async (req, res) => {
  // Implemente sua lógica aqui
});

// E na rota fallback:

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

// Inicialização do servidor com tratamento de erros
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Database URL: ${process.env.DATABASE_URL?.split('@')[1] || 'não configurada'}`);
}).on('error', (err) => {
  console.error('❌ Falha ao iniciar o servidor:', err);
  process.exit(1);
});