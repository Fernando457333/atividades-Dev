//O método lastIndexOf() retorna o ultimo índice que um certo elemento 
//pode ser encontrado no array, ou -1 se o elemento não estiver presente.
// O array é pesquisado de trás para frente, começando pelo fromIndex.
//exemplo
var array = [2, 5, 9, 2];
array.lastIndexOf(2); // 3
array.lastIndexOf(7); // -1
array.lastIndexOf(2, 3); // 3
array.lastIndexOf(2, 2); // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
//O seguinte exemplo utiliza lastIndexOf para encontrar todos os índices 
//de um elemento em um dado array, utilizando push para adicioná-los em 
//outro array quando são encontrados.
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
//Note que devemos tratar o caso idx == 0 separadamente aqui pois o
//elemento será sempre encontrado independente do parâmetro fromIndex se
//ele for o primeiro elemento do array. Isso é diferente do método indexOf.
