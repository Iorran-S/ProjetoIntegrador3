const bcrypt = require('bcrypt');

// Suponha que isso venha do banco de dados
const hashSalvo = '$2b$10$IWumR2MZWRSjMP1k20bwUuwDePY6BOPl.pHh/x/Rw782R2UTQpWnK'; // hash real armazenado
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
