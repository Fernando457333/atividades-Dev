//executa uma função callback,passada como argumento,para cada elemento do array
//que resulta em apenas um valor de retorno.

//a função passada como argumento para o metodo reduce recebe 4 argumentos

//acumulador:valor inicial(ou valor callback anterior)
//valor atual: o valor do elemento atual
//index: o indice atual
//array:o array completo

{//somando todos os elementos de um array usando o for(loop)
    const array = [0, 1, 2, 3, 4];

    let somaTotal = array[0];//0 é o valor do indice

    for (let i = 1; i < array.length; i++) {
        const elementoAtual = array[i]

        somaTotal = somaTotal + elementoAtual
    }
    console.log(somaTotal)
}//somou 10


//usando o reduce
const array = [0, 1, 2, 3, 4];

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 10);//colocando o 10 ali...ele soma junto com os numeros contidos na array
console.log(valorReduce)//10
//o REDUCE retorna apenas um valor da "const array" somando todos os elementos e somando em um só

//  chamadas //acumulador // valorAtual // indice //     array    //retorno
//  primeira       0            1            1      [0, 1, 2, 3, 4]    2
//  segunda        1            2            2      [0, 1, 2, 3, 4]    3
//  terceira       3            3            3      [0, 1, 2, 3, 4]    6
//  quarta         6            4            4      [0, 1, 2, 3, 4]    10
//
//
//