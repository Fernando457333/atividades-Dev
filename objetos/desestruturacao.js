const pessoa = {
    nome: "fernando",
    idade: 20,
    cidade: "Chapecó",
    profissão: "dev"
}

//const nome = pessoa.nome
//const idade = pessoa.idade

const { node, idade, ...outros } = pessoa;//usando de forma simples 
//para colocar no console sem ter que escrever o codigo todo

console.log(nome, idade)
console.log(outros)