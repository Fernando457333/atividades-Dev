//jeito errado

const nome1 = "joao";
const nome2 = "maria";
const nome3 = "jose";

//jeito certo

const nomeDosEstudantes = ['jose', 'joao', 'maria'];
console.log(nomeDosEstudantes);

//outro exemplo
{
    const nomeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
    console.log(nomeEstudantes[0]);
}
//o numero [5] nao existe,somente de 0 a 4
{
    const nomeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];
    console.log(nomeEstudantes[0]);
    console.log(nomeEstudantes[1]);
    console.log(nomeEstudantes[2]);
    console.log(nomeEstudantes[3]);
    console.log(nomeEstudantes[4]);
    console.log(nomeEstudantes[5]);//undefined
}
//podendo guardar ate numeros const notas = [1,10,5,6,8]