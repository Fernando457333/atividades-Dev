let z = 5//quando o let esta fora do escopo ele funciona
function soma(x, y) {//se precisar colcoar dentro da soma o numero
    // ou letra que ira precisar
    let z = 5//se colocar console.log(z) ele n ira funcionar
    return x + y + z
}
console.log(soma(5, 3))