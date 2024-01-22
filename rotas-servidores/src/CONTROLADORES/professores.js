const professores = require('../bancodados')

const filtrarProfessores = (req, res) => {
    //console.log(req.query);
    const { stack } = req.query
    let resultado = professores;

    console.log('cheguei no controlador de lstagem do professor')

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        })

    }
    res.send(resultado)
}

const encontrarUmProfessor = (req, res) => {
    const professorEncontrado = professores.find((professore) => {
        return professore.id === Number(req.params.id)
    })
    //console.log(req.params.id);
    res.send(professorEncontrado);
}

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}