//funções são é um bloco de codigo para executar uma tarefa
//usando esse codigo para executar o codigo de forma mais siples
//sintaxe = function nomeDaFunc (params){
//   //seu codigo aqui    
//}
//codigo = function imprimirOla (){
// console.log("ola!");    
//}
function apresentar() {
    if (pessoa.idade < 21) {
        console.log(`Meu nome é ${pessoa.nome},sou um(a) jovem de ${pessoa.idade} anos e
     sou ${pessoa.profissao}.`)
    } else if (pessoa.idade < 65) {
        console.log(`Meu nome é ${pessoa.nome},sou um adulto de ${pessoa.idade} anos e
     sou ${pessoa.profissao}.`)
    } else {
        console.log(`Meu nome é ${pessoa.nome},sou um idoso de ${pessoa.idade} anos e
     sou ${pessoa.profissao}.`)
    }
}
const pessoa = {
    nome: "fernando",
    idade: 23,
    profissao: "fds"
}
apresentar(pessoa)

const pessoa2 = {
    nome: "pedro",
    idade: 65,
    profissao: "medico"
}
apresentar(pessoa2)

const pessoa3 = {
    nome: "ana",
    idade: 18,
    profissao: "estudante"
}
apresentar(pessoa3)
//desta forma fica mais facil de mudar algum dado da pessoa
//usando apenas os exemplos da linha 9 a 26