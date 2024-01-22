//faz uma copia da parte de um array,retornando essa copia.
//O array original  não é modificado

const opcoes = ["eu", "voce", "ele", "nos"];
const resultado = opcoes.slice(1, 3);
console.log(resultado);//["voce","ele"]

//ele recorta a string ou array em pedaços colocando os numeros no fim
//caso não colocar ele pega ate o final