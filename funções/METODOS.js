function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem"
    } else if (idade < 66) {
        return "adulto"
    } else {
        return "idoso"
    }
}

//isso é oque chamamos de metodo
const pessoa = {
    nome: "fernando",
    idade: 23,
    profissao: "dev",
    apresentar: function () {
        const faixaEtaria = determinarFaixaEtaria(this.idade)

        console.log(`Meu nome é ${this.nome},sou um ${faixaEtaria} de ${this.idade} anos e
     sou ${this.profissao}.`)
    }
}

pessoa.apresentar()
//calculando a idade usando metodo
const pessoa2 = {
    nome: "joao",
    idade: 33,
    profissao: "dev",
    exercicio: function (pessoa2) {
        const faixaIdade = determinarIdade(this.idade)
        console.log(`Meu nome é ${this.nome},sou um ${faixaIdade} de ${this.idade} anos e
     sou ${this.profissao}.`)

        function determinarIdade(idade) {
            if (idade <= 21) {
                return "jovem"
            } else if (idade < 66) {
                return "adulto"
            } else {
                return "idoso"
            }

        }
    }
}
pessoa2.exercicio()
