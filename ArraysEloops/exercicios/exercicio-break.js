//const palavra = 'abracadabra';//tem 5 letras a

//let encontrado = false

//for (let letra of palavra) {
//    if (letra === 'a')
//        console.log('tem letra a')
//    encontrado = true
//   break;

//}
//if (encontrado === false) {
//    console.log('nao tem letra a')
//}

const palavra = 'abracadabra'
let quantidade = 0
for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++
    }
}

console.log(quantidade)