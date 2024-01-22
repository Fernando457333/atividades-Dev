// 21 anos ou menos -> jovem
//22 a 65 anos -> adulto
//66 ou mais anos -> idoso

//colocar idade determinada por maior idade do usuario
function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem"
    } else if (idade < 66) {
        return "adulto"
    } else {
        return "idoso"
    }
}

const valorRetornadoFuncao = determinarFaixaEtaria(18)
console.log(determinarFaixaEtaria)