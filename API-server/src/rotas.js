const express = require('express');
const instrutores = require('./controladores/instrutores');
const rotas = express();

rotas.get('/instrutores', instrutores.listarIntreutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarIntrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor)
module.exports = rotas;

