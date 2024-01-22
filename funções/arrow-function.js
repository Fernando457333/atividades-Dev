//declaração tradicional para uma função
console.log(soma(5, 2))//podendo usar a soma antes de fazer a function como
// esta linha de exemplo,não funciona se for feito antes da const
function soma(x, y) {
    //codigo
    const resultado = x + y
    return resultado
}
//declaração mais eficas de arrow function

const soma = (x, y) => {
    //codigo
    const resultado = x + y
    return resultado
}

console.log(soma(5, 2))