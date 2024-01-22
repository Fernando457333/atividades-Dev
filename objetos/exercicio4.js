const produtosConsumidos = [
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
const cartao = {
    nome: "fernando",
    idade: 23,
    produtosConsumidos
}
let totalAPagar = 0
for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnidade * produto.quantidade;
}
const totalFormatado = (totalAPagar / 100).toFixed(2);
console.log(`Sr(a) ${cartao.nome}, o total a pagar é R$ ${totalFormatado} reais`)