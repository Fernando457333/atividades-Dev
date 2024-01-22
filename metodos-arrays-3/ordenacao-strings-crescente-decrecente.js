//  Colocando um nome com letra maiuscula ele joga para frente,mas sempre se tiver um numero-
//ele ira colocar em 1° lugar,pq numeros vem antes de letras

{
    const pessoas = ['Joao', 'carlos']//ira retornar Joao por causa da letra maiuscula
    const eu = ['Maria', '1fernando']//ira retornar 1fernando por causa do numero
    pessoas.sort();
    eu.sort();
    console.log(pessoas, eu)
}//[ 'Joao', 'carlos' ] [ '1fernando', 'Maria' ]

const pessoas = ['Joao', 'carlos', 'ana', 'beatriz'];

//ordenação crecente
pessoas.sort((a, b) => {
    return a.localeCompare(b);//com essa função localeCompare() ele deixa de dar prioridade para a letra maiuscula e ordena tudo alfabeticamente,independentemente
});

console.log(pessoas)

//ordenação decrescente
pessoas.sort((a, b) => {
    return b.localeCompare(a);//so inverte o "a" e "b"
});