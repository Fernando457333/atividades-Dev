//retona o primeiro elemento de uma array,correspondente a condição
//implementada na função callback,passada como argumento.Caso contrario,retorna undefined

const usuario = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'pedro', idade: 30 },
    { nome: 'rodrigo', idade: 15 }
];

const resultado = usuario.find((nome) => {
    return nome.nome === 'joao';
});
console.log(resultado);