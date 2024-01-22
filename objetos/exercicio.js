const pessoa = {
    nome: 'fernando',
    altura: 1.73,
    peso: 90,
    CNH: true,
    apelidos: ["fer", "nando", "fehh"]
}
//modo pratico
//true           false                            
const textoCNH = (pessoa.CNH ? "possui CNH" : "não possui CNH")
//para criar precisa usar let fora do IF
let textooCNH = "";

if (pessoa.CNH === true) {
    textoCNH = "possui CNH";
} else {
    textoCNH = "não possui CNH"
}
console.log(`${pessoa.nome} anos,${pessoa.altura}cm de altura,${textoCNH} e os seguintes apelidos:`)
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`)
}
// -${pessoa.apelidos[0]}
// -${pessoa.apelidos[1]}`)