//Taxa de juros
//para calcular quanto de juros da em um emprestimo
//   (m)1/n
//i= (c)    -1

const montante = 90000;
const capital = 60000;
const tempo = 24;

const taxa = (montante / capital) ** (1 / tempo) - 1;
console.log(`a taxa do finaciamento foi ${taxa * 100}%`);
