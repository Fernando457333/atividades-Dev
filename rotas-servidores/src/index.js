const express = require('express');

const { filtrarProfessores, encontrarUmProfessor } = require('./CONTROLADORES/professores')

const app = express();

//const primeirointermediario = (req, res, next) => {
//    console.log('passei no 1 intermediario');
//    res.send('algo deu errado');
//    next()
//}

//const segundointermediario = (req, res, next) => {
//    console.log('passei no 1 intermediario');
//    res.send('algo deu errado');
//    next()
//}

//app.use(primeiroIntermediario)

app.use((req, res, next) => {
    console.log('passei no 1 intermediario');
    res.send('algo deu errado');
    next()
});

app.get('/professores', filtrarProfessores)
//localhost 3000
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);
//npm install -D nodemon
//npm run dev   

