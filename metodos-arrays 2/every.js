//testa todos os elementos do array passam pelo teste implementado
//na função callback,passando como algumento e retorna true ou false

const numeros = [1, 2, 3, 4];
const resultadoo = numeros.every((elementoAtual) => {
    return elementoAtual < 5;
});
console.log(resultadoo)
//return true

const frutas = ["abacaxi", "manga", "melancia"];
const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !== "manga";//false
});
console.log(resultado)