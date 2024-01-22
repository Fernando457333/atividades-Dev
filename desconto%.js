//usando a regra de tres para calcular a porcentagem
//a b
//c d
//a=preco /b 100% do valor do produto /c seu valor de carteira /d é o valor que queremos descobrir


const precoDoTenis = 12999;//a
const meuDinheiro = 8000;//c

const desconto = precoDoTenis - meuDinheiro;

const cupom = 100 * desconto / precoDoTenis; //100 =d

console.log(`O valor do cupom deve ser ${cupom}%`)

//D = 30%