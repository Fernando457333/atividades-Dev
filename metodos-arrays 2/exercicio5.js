const produtos = [
    { nome: 'arroz', preco: 500 },
    { nome: 'carne', preco: 3200 },
    { nome: 'biscoito', preco: 450 },
    { nome: 'banana', preco: 320 }
];

const produtosComDesconto = produtos.map((produto) => {
    return {
        nome: produto.nome,
        preco: produto.preco,
        desconto: produto.preco * 0.1//para calcular em porcentagem usamos 10/100 que da 0.1
    }
});

console.log(produtosComDesconto)