//encontra um item dentro de um array,retornando o indice da primeira ocorrencia do item procurado
const lista = ["eu", "tu", "eles"];
const indice = lista.includesOf("tu")
console.log(indice); //vai retornar 1

const lista1 = ["ele", "voce", "nos"];
const boolean = lista1.includes("voce");
console.log(boolean);//vai retornar true