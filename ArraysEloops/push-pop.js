//metodo tradicional para colocar um nome no fim da lista "pedro"

const nomeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andreia', 'fernando'];

nomeEstudantes[nomeEstudantes.length] = 'pedro';

console.log(nomeEstudantes);

//metodo simplificado de fazer a mesma coisa usando "push"

{
    const nomeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andreia', 'fernando'];
    nomeEstudantes.push('pedro')
    console.log(nomeEstudantes);
}//podendo colocar varias vezes o mesmo codigo EX:
//nomeEstudantes.push('pedro')
//nomeEstudantes.push('pedro')
//nomeEstudantes.push('pedro')
//nomeEstudantes.push('pedro')
//todos vão aparecer no terminal como nome final

//AGORA PARA REMOVER UM NOME ULTILIZAMOS O "POP" NO FIM DO CODIGO=
nomeEstudantes.pop();
//CADA VEZ INSERIDO ELE REMOVE O ULTIMO NOME,PODENDO COLOCAR VARIAS VEZES
//PARA REMOVER SEMPRE O ULTIMO.