const express = require('express');

let app = express();

app.get('/', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá</h1>');

});

app.get('/users', (req,res)=>{

    res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users:[{
                nome:'Projeto integrador',
                email:'projeto@gmail.com',
                id:1
            }]

        });

});

app.listen(3000, () =>{

    console.log('Servidor rodando!');

});