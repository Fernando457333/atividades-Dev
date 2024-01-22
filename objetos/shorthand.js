const carro = {
    marca: "toyota",
    modelo: "etios",
    ano: 2020,
    potencia: 80
}
//const minhaAltura = 1.73;
//const pessoa = {
//    nome: "jose",
//    altura: minhaAltura,
//    peso: 90,




const pessoa = {
    nome: "jose",
    altura: 1.73,
    peso: 90,
    carro: {
        marca: "toyota",
        modelo: "etios",
        ano: 2020,
        potencia: 80
    }
}
console.log(pessoa.carro)