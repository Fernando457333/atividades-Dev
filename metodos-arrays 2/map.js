//execulta uma função callback passada como argumento para cada elemento
//do array e retorna um novo array como resultado

{
    const numeros = [1, 2, 3];

    const dobro = numeros.map((numero) => {
        return numero * 2;
    });
}
//dobro = [2,4,6]
//numeros = [1,2,3]

const usuario = [
    { nome: 'joao', sobrenome: 'vadio', idade: 23 },
    { nome: 'maria', sobrenome: 'sla', idade: 18 },
    { nome: 'pedro', sobrenome: 'fds', idade: 30 },
    { nome: 'rodrigo', sobrenome: 'pkk', idade: 15 }
];

const novoarray = usuario.map((usuarios) => {
    return {
        nomeCompleto: `${usuarios.nome} ${usuarios.sobrenome}`,
        idade: usuarios.idade
    }//ele pega cada tema e junta os nomes e sobrenomes 
});
console.log(novoarray)