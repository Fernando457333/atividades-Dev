const usuario = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'pedro', idade: 30 },
    { nome: 'rodrigo', idade: 15 }
];

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((elemento) => {
        return elemento.idade > 17;
    });
    if (resultado === true) {
        console.log("festa liberada")
    } else {
        console.log("possui menor de idade")
    }
}

fiscalizarFesta(usuario)