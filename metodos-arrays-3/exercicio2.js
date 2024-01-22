const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'prata' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'prata' },
];

const ordenarCarros = (arraycarros, campoOrdenacao) => {
    arraycarros.sort((primeiro, segundo) => {
        return primeiro[campoOrdenacao].localCompare(segundo[campoOrdenacao]);
    });
    console.log(arraycarros);
}

ordenarCarros(carros, 'nome', 'ano', 'marca')//colcoando oq deseja que ele ordene primeiro
