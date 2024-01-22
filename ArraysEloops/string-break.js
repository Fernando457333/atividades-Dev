//para achar a letra 'h' usamos esta formula
const palavra = 'alemanha';

let encontrado = false

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('tem a letra h')
        encontrado = true
        break;
    }
}
if (encontrado === false) {//podendo usar !encontrado
    console.log('nao tem h')
}
