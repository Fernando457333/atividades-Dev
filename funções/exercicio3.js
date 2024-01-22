//desta forma é eficaz para fazer umaapresentação usando uma função-
//de idade como no exemplo abaixo      

function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem"
    } else if (idade < 66) {
        return "adulto"
    } else {
        return "idoso"
    }
}
function apresentar() {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade)
    if (pessoa.idade < 21) {
        console.log(`Meu nome é ${pessoa.nome},sou um ${faixaEtaria} de ${pessoa.idade} anos e
     sou ${pessoa.profissao}.`)
    }
}
const pessoa = {
    nome: "fernando",
    idade: 23,
    profissao: "fds"
}
apresentar(pessoa)