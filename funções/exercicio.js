const pessoa = {
    nome: "joão",
    idade: 12,
    altura: 1.40,
    profissao: "estudante"
}
//if (pessoa.idade < 18) {
//    console.log("jovem")
//} else {
//    console.log("adulto")
//}
function dados(pessoa) {
    console.log(`Ola!, meu nome é ${pessoa.nome},sou um jovem de ${pessoa.idade} anos,tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}
dados(pessoa)