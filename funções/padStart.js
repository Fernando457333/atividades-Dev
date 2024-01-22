//preenche uma sting colocando text no inicio dela(varias vezes,se nescessario)
//ate que a string atinja o tamanho lenght
const ultimos4Digitos = "2345";
const numeroCartao = ultimos4Digitos.padStart(19, "**** ");
console.log(numeroCartao);