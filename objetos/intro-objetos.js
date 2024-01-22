const pessoa = {
    nome: "jose",
    altura: 1.73,
    peso: 60,
};
//outro jeito pratico de fazer com []
pessoa['nome'] = 'pedro'
pessoa['altura'] = 1.80
pessoa['peso'] = 70

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura} e tenho ${pessoa.peso}kg`);
