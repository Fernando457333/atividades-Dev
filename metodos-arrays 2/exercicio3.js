const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'prata' },
    { nome: 'ranger', marca: 'ford', ano: '2009', cor: 'prata' },
    { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'prata' },
]
const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });
    console.log(resultado);
}
buscarCarro('ford', carros);
