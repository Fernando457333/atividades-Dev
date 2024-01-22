//"Blue Whale".indexOf("Blue"); // retorna  0
//"Blue Whale".indexOf("Whale"); // retorna  5
//"Blue Whale".indexOf("Blute"); // retorna -1
//"Blue Whale".indexOf("Whale", 0); // retorna  5
//"Blue Whale".indexOf("Whale", 5); // retorna  5
//"Blue Whale".indexOf("Whale", 7); // retorna -1
//"Blue Whale".indexOf(""); // retorna  0
//"Blue Whale".indexOf("", 9); // retorna  9
//"Blue Whale".indexOf("", 10); // retorna 10
//"Blue Whale".indexOf("", 11); // retorna 10

//saber se um email é valido
//tem que ter um pelo menos @
//tem um ponto depois do @
const email = "marshmallow34657@gmail.com";
const indexArroba = possivelemail.indexOf(".");
const indexPontoArroba = possivelEmail.indexof(".", indexArroba);

if (indexPontoArroba > indexArroba) {
    console.log("email atende as requisições");
} else {
    console.log("não ha nenhum potno após o arroba")
}