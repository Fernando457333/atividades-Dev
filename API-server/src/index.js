const express = require('express');
const body = require('body-parser')
const rotas = require('./rotas');

const app = express();
app.use(express.json());

app.use(rotas);
app.use(body.json());
app.use(body.urlencoded({ extended: true }))
app.listen(3000);