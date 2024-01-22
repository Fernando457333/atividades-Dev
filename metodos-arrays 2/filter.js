//cria um novo array com todos os elementos correspondentes a condição
//implementada na função callback,passada coomo argumento
{
    const numeros = [1, 2, 3, 4, 5];

    numeros.filter((numero) => {
        return numero > 2;//podendo usar o <> para filtrar os numeros abaixos ou acima
    });
}
//retorna [3,4,5]


{
    const numeros = [1, 4, 6, 4, 8, 9, 2, 3, 3];

    const resultado = numeros.filter((numero) => {
        return numero === 1;//filtra somente o numero 1
    });
    console.log(resultado);
}

const nomes = ['joao', 'maria', 'jose', 'pedro', 'joao'];

const resultado = nomes.filter((nome) => {
    return nome === 'joao'
});
console.log(resultado);
