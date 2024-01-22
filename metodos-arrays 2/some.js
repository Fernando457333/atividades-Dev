//testa se ao menos um dos elementos passa pelo teste
//implementado na função callback,passada como argumento e retorna true ou false

{
    const letras = ['a', 'b', 'c'];

    const resultado = letras.some((letra) => {
        return letra === 'd';//false
    });
    console.log(resultado);
}

{
    const nomes = ['joao', 'maria', 'rodrigo'];

    const resultado = nomes.some((teste) => {
        return teste === 'maria';
    })
    console.log(resultado);
}//true

const numeros = [2, 5, 9, 7, 8];
const resultado = numeros.some((numero) => {
    return numero % 2 === 0;//para descobrir se um numero é par,usamos a "%"
});
console.log(resultado)
