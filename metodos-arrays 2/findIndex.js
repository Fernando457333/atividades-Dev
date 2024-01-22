//retorna o indice do primeiro elemento do array,correspondente a condição
//implementada na função callback,passada como argumento.
//caso contrario retorna -1

{
    const numeros = [1, 2, 3, 4, 5];

    numeros.findIndex((numero) => {
        return numero === 5;
    });
}
//retorna 4

{
    const carros = [
        { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },//0
        { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'prata' },//1
        { nome: 'ranger', marca: 'ford', ano: '2009', cor: 'prata' },//2
        { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'prata' },//3
    ];

    const resultado = carros.findIndex((carro) => {
        return carro.nome === 'ranger';
    });

    console.log(resultado)
}

{
    const nomes = ['joao', 'ana', 'rodrigo']

    const resultado = nomes.findIndex((pessoa) => {
        return pessoa === 'joao'
    })
    console.log(resultado)
}
const numeros = [1, 2, 3, 4, 5]

const resultado = numeros.findIndex((numero) => {
    return numero === 3
})
console.log(resultado)