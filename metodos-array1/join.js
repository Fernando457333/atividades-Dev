//junta todos os elementos de uma array em uma string,separando-os com virgula
//e retorna esta string

const opcoes = ["uma", "outra"];

let resultado = opcoes.join();
console.log(resultado);//uma,outra

resultado = opcoes.join("");
console.log(resultado);//umaoutra

resultado = opcoes.join(" ou ");
console.log(resultado);//uma ou outra

function inverterstring(texto) {

    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    const textoInvertido = arrayDeLetras.join("");
    console.log(textoInvertido);
}

inverterstring("cubos academy")