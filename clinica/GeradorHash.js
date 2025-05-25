const bcrypt = require('bcrypt');

const senhaPura = 'SenhaTesteAdmin012030';
const saltRounds = 10;

bcrypt.hash(senhaPura, saltRounds, (err, hash) => {
  if (err) {
    return console.error('Erro ao gerar hash:', err);
  }

  console.log('Hash gerado:', hash);
});