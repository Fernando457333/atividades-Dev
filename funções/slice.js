//O método slice() extrai uma parte de uma string e a retorna 
//como uma nova string, sem modificar a string original.

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
//Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
//Expected output: "lazy"

//Paramêtros
//startIndex
//É o índice, de base zero, onde se inicia a extração. Se for 
//um número negativo, será o mesmo que 
//executar str.length + startIndex (por exemplo, se startIndex for -3, será o mesmo que executar str.length - 3).

const nome = "Ricardo";
console.log(nome.slice(-3)); // retorna 'rdo'

//Se startIndex for maior ou igual a str.length, uma string vazia será retornada.

const nomee = "Ricardo";
console.log(nomee.slice(7)); // retorna <empty string>'

const cidade = "salvador-BA";// possui 11 strings
const penultimoIndex = cidade.length - 2;//sempre ira pegar os 2 ultimos numeoros
let estado = (cidade.slice(penultimoIndex));
console.log(`As letras que procuro são ${estado}`);
