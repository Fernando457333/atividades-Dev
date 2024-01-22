let numero1 = 5;
let numero2 = numero1;
numero1 = 10;
console.log("bunero1 =", numero1);
console.log("numero2 =", numero2);
//imprime bem certinho os dados

let texto1 = "abra";
let texto2 = texto1;
texto1 = texto1 + "cadabra";
console.log("texto1 = ", texto1);
console.log("texto2 = ", texto2);

let objeto1 = { prop: 5 };
let objeto2 = objeto1;
objeto1.prop = 10;
objeto2.prop = 20;
console.log("objeto1 =", objeto1);
console.log("objeto2 =", objeto2);
//quando colocado o  .prop ele altera dos 2 objetos,n somente 1 mas os 2

let array1 = [1, 2, 3];
let array2 = array1;
array1.push(4);
array2.push(5);
console.log("array1 =", array1);
console.log("array2 =", array2);