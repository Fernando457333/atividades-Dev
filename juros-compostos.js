//calcular juros compostos usamos a formula M=c(1+i)t
//M="montante" valor final do dinheiro + juros
//C= "capital" valor inicial de uma divida,emprestimo ou investimento
//i= "taxa fixa de juros" expressa em decimal ma formula,o valor da taxa dividido por 100%
//t= periodo de tempo

//M=1000 (1+0,125)5
//M=1000 (1,802)
//M=1802
const capitalInicial = 1000;
const taxa = 0.125;  //ou usamos 12.5 dividido por 100
const tempo = 5;

//const montante = capitalInicial * (1+taxa) ** tempo;
const montante = capitalInicial * Math.pow((1 + taxa), tempo);

console.log(montante);
