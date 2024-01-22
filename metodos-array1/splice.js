//altera o conteudo de uma lista,removendo zero ou mais items de um array num determinado indice
//opcionalmente,pode-se inserir um ou mais items no local onde outros foram deletados

const lista = ["a", "b", "c", "d", "e"];
lista.splice(1, 2, "f");
console.log(lista);
//['a','f','d','e']
//se colocar -1 ele conta de tras para frente
//-2 do penultimo e assin vai
//colocar 0 no segudo indice n deleta nenhum nunero