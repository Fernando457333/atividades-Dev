//usando lenght para determinar qual o tamanho de uma Arrays

const nomeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];

console.log(nomeEstudantes.length);

//aqui determinamos quando um nome pode ser colocado sempre em ultimo
//usando "nomeEstudantes[nomeEstudantes.length] = 'pedro';"
{
    const nomeEstudantes = ['jose', 'joao', 'maria', 'joana',];
    nomeEstudantes[nomeEstudantes.length] = 'pedro';
    console.log(nomeEstudantes);
    //podendo colocar varios nomes,mas "pedro" sempre sera o ultimo da lista
    //assim sempre funcionando" nomeEstudantes[nomeEstudantes.length] = 'pedro';"
}