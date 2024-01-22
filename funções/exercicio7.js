//colcoar as primeiras letras do nome em maisculo
//"fernando dos santos"

const nome = "fernando dos santos";
const arrayNomes = nome.split(" ");
let nomeFormatado = "";
for (let item of arrayNomes) {
    //transformar a inicial de cada item em maiusculo
    let primeiraLetra = item.slice(0, 1);//vai retornar somente a primeira letra "0"
    let restanteNome = item.slice(1);//restante do nome em minusculo

    nomeFormatado += primeiraLetra.toUpperCase() + restanteNome + " ";// coloca a primeira letra em maiusculo e add o restante do nome e coloca espaço
}
console.log(nomeFormatado.trim());