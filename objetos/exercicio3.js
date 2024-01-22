const cartao = {
    nome: "fernando",
    idade: 23,
    produtosConsumidos: [
        {
            nome: "pao de alho",
            precoUnidade: 1500,
            quantidade: 3

        },
        {
            nome: "cerveja",
            precoUnidade: 1000,
            quantidade: 2
        },
        {
            nome: "batata frita",
            precoUnidade: 2500,
            quantidade: 1

        },
    ]
}
console.log(cartao.nome)
console.log(cartao.idade)
cartao.idade = 25//mudando a idade
console.log(cartao.idade)
console.log(cartao.produtosConsumidos[0].nome)
console.log(cartao.produtosConsumidos[cartao.produtosConsumidos.length - 1].precoUnidade)