//  Ordena os elementos do propio array.
//por padrão,a ordenação é de acordo com a tabela "unicode".

//  Opcionamente,recebe uma função callback que possui dois parametros,-
//sendo eles,o primeiro e o segundo elemento a ser comparado.

//   IMPORTANTE LEMBRAR QUE:
//NA TABELA UNICODE,NUMEROS VEM ANTES DE LETRAS

//exemplo de ordenação padrão

{
    const array = [2, 4, 1, 20, 3, 43];

    array.sort();
}//[1,2,20,3,4,43] ele esta ordenando pela seuquencia de numeros,não importa o valor dele

//exemplo com função CALLBACK ((elemento))
{
    const array = [2, 4, 1, 20, 3, 43];

    array.sort((a, b) => {
        return a - b;
    });
}//[1,2,3,4,20,43] assim deixando em ordem pelo valor do numero tamben
