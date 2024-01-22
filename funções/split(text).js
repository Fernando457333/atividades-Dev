//transforma uma string num array de strings menores,separando-a em todos os lugares onde encontrar o argumento text

const nomeCompleto = "Fernando Dos Santos";
const array = nomeCompleto.split(" ");;
const nomeDoMeio = array[1];//usado para definir qual palavra vai imrpimir//santos
const primeiroNome = array[0];//fernando
const ultimoNome = array[2];//santos
console.log(primeiroNome, nomeDoMeio, ultimoNome);