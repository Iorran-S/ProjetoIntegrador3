const express = require('express');
const mysql = require('mysql2/promise'); // Usando a versão promise-based
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();

// Configurações
const saltRounds = 10;
const sessionSecret = process.env.SESSION_SECRET || 'your-secret-key-here';

// Middlewares
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}));

// Pool de conexões MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'estetica martins',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Verificação de conexão com o banco
pool.getConnection()
  .then(conn => {
    console.log('Conectado ao banco de dados MySQL');
    conn.release();
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  });

// Middleware de autenticação
const authenticateEmployee = (req, res, next) => {
  if (!req.session.employeeId) {
    return res.status(401).json({ error: 'Não autorizado' });
  }
  next();
};

// Rota para contato
app.post('/api/contact', async (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;
  
  try {
    const [result] = await pool.query(
      'INSERT INTO clientes (nome, email, fone, mensagem) VALUES (?, ?, ?, ?)',
      [nome, email, telefone, mensagem]
    );
    res.status(200).json({ success: true, message: 'Contato salvo com sucesso!' });
  } catch (err) {
    console.error('Erro ao salvar contato:', err);
    res.status(500).json({ error: 'Erro ao salvar contato' });
  }
});

// Rotas de autenticação
// Rotas de autenticação - Versão Aprimorada
app.post('/api/auth/login', async (req, res) => {
  const { telefone, senha } = req.body;
  
  // Verificação básica dos campos
  if (!telefone || !senha) {
    return res.status(400).json({ 
      success: false, 
      message: 'Telefone e senha são obrigatórios' 
    });
  }

  try {
    console.log(`Tentativa de login com telefone: ${telefone}`); // Log para depuração
    
    // 1. Buscar funcionário (com tratamento para diferentes formatos de telefone)
    const [employees] = await pool.query(
      'SELECT id, nome, senha_hash FROM FUNCIONARIOS WHERE telefone = ? OR telefone = ? OR telefone = ?', 
      [
        telefone, 
        telefone.replace(/\D/g, ''), // Remove não-numéricos
        `55${telefone.replace(/\D/g, '')}` // Adiciona código do país
      ]
    );
    
    // 2. Verificar se funcionário existe
    if (employees.length === 0) {
      console.log('Funcionário não encontrado para o telefone:', telefone);
      return res.status(401).json({ 
        success: false, 
        message: 'Credenciais inválidas' 
      });
    }
    
    const employee = employees[0];
    console.log('Funcionário encontrado:', employee.id); // Log para depuração
    
    // 3. Comparar senha com bcrypt
    console.log('Comparando senha com hash:', employee.senha_hash); // Log
    const match = await bcrypt.compare(senha, employee.senha_hash);
    
    // 4. Se não coincidir
    if (!match) {
      console.log('Senha não corresponde para o funcionário:', employee.id);
      return res.status(401).json({ 
        success: false, 
        message: 'Credenciais inválidas' 
      });
    }
    
    // 5. Criar sessão
    req.session.employeeId = employee.id;
    req.session.employeeName = employee.nome;
    console.log('Sessão criada para:', employee.id); // Log
    
    // 6. Responder com sucesso
    res.json({ 
      success: true,
      employee: {
        id: employee.id,
        nome: employee.nome
      }
    });
    
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ 
      success: false,
      message: 'Erro no servidor ao tentar autenticar',
      error: err.message // Adiciona detalhe do erro
    });
  }
});

// Rota para cadastrar novos funcionários (protegida)
app.post('/api/admin/funcionarios', authenticateEmployee, async (req, res) => {
  const { nome, telefone, senha } = req.body;
  
  try {
    const senha_hash = await bcrypt.hash(senha, saltRounds);
    
    const [result] = await pool.query(
      'INSERT INTO FUNCIONARIOS (nome, telefone, senha_hash) VALUES (?, ?, ?)',
      [nome, telefone, senha_hash]
    );
    
    res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error('Erro ao cadastrar funcionário:', err);
    
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Telefone já cadastrado' });
    }
    
    res.status(500).json({ error: 'Erro ao cadastrar funcionário' });
  }
});

// Rota para relatórios (protegida)
app.get('/api/admin/pricing-reports', authenticateEmployee, async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM RESUMO_SERVICOS');
    res.json(results);
  } catch (err) {
    console.error('Erro ao buscar relatórios:', err);
    res.status(500).json({ error: 'Erro ao buscar relatórios' });
  }
});

// Rota para listar serviços (exemplo adicional)
app.get('/api/servicos', async (req, res) => {
  try {
    const [servicos] = await pool.query('SELECT id, nome, preco FROM SERVICOS');
    res.json(servicos);
  } catch (err) {
    console.error('Erro ao buscar serviços:', err);
    res.status(500).json({ error: 'Erro ao buscar serviços' });
  }
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});