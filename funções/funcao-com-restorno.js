function verificarMaioridade(idade) {
    if (idade >= 18) {
        //maior de idade
        return true
    } else {
        //menor de idade
        return false
    }
}
//usando esta formula para maioridade de bebida alcoolica
const valorRetornadoFuncao = verificarMaioridade(20);
console.log(valorRetornadoFuncao);