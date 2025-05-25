const bcrypt = require('bcrypt');

// Suponha que isso venha do banco de dados
const hashSalvo = '$2b$10$qhCWffO6XeX1Si.M/2K3au9F7La.cc72H38DemVGCWdG4Ys.XU0Cu'; // hash real armazenado
const senhaDigitada = 'SenhaTesteAdmin012030';

bcrypt.compare(senhaDigitada, hashSalvo, (err, resultado) => {
  if (err) {
    console.error('Erro na comparação:', err);
  } else if (resultado) {
    console.log('Login válido!');
  } else {
    console.log('Login inválido!');
  }
});
