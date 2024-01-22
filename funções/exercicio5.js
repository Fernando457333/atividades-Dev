const milhar = "1,350,000";
let casaMilharBr = milhar.replace(",", ".",);
casaMilharBr = casaMilharBr.replace(",", ".");
console.log(casaMilharBr);
//para usar 2 vezes é nescessario usar let e fazer o codigo 2 vzs como
//o exemplo acima

let numero = "1,350,000";

while (numero !== numero.replace(",", ".")) {
    numero = numero.replace(",", ".")
}
console.log(numero);
//desta forma ele ira fazer um loop ate terminar de mudar "," por "."

function replaceALL(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}
numero = "1,350,000"
console.log(replaceALL(numero, ",", "."));
//aqui podemos fazer uma function para exercer a mesma pratica das anteriores
//podendo colocar quantas "," quiser que ela ira trocar todas de forma eficiente