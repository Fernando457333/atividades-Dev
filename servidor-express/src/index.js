const express = require('express');

const app = express();

app.get('/home', (requisicao, resposta) => {
    resposta.send('ola...esse é o meu primeiro servidor com express')
});

app.listen(3000)
