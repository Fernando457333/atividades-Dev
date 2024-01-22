//agora usando o comando "SHIFT()" ele remove o 1º nome da lista

const nomeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
nomeEstudantes.shift();
console.log(nomeEstudantes);

{
    //agora usando o ".UNSHIFT()" coloca o nome no 1º lugar

    const nomeEstudantes = [, 'joao', 'maria', 'joana', 'andre'];
    nomeEstudantes.unshift('jose');
    console.log(nomeEstudantes);

}