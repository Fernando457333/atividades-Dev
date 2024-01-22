//retorna um numero que indica se a string de referncia vem antes,depois ou é igual a string comparada


const pessoas = ['Joao', 'carlos']//ira retornar Joao por causa da letra maiuscula
const eu = ['Maria', '1fernando']

pessoas.sort((a, b) => {
    return b.localeCompare(a);//so inverte o "a" e "b"
});
console.log(pessoas)

//ordenação crescente
const numeros = [1, 30, 4, 6, 80, 34];

numeros.sort((primeiro, segundo) => {
    if (primeiro < segundo) {
        return -1;//se o numero for menor ele manten
    }
    if (primeiro > segundo) {
        return 1;//se acaso o numero for maior que A ele passa na frente (13,14,15,20)
    }

    return 0;


});
console.log(numeros);
//ordenação decrescente
numeros.sort((primeiro, segundo) => {
    if (primeiro < segundo) {
        return 1;
    }
    if (primeiro > segundo) {
        return -1;
    }

    return 0;
});
console.log(numeros);