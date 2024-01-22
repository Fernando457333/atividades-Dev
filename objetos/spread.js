const pessoa = {
    nome: "fernando",
    idade: 20,
    cidade: "Chapecó",
    profissao: "dev"
}
const endereco = {
    rua: "aqui",
    numero: "32",
    bairro: "Bairro legal"
}
const objetoFundido = {
    ...pessoa,
    ...endereco,
    esquina: 19
}
console.log(objetoFundido)