const { instrutores } = require('../banco-de-dados')
let { identificadorIntrutor } = require('../banco-de-dados')
const listarIntreutores = (req, res) => {
    return res.status(200).json(instrutores);
}

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrador' })
    }

    return res.status(200).json(instrutor)
}
const cadastrarIntrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "o nome é obrigatorio" })
    }
    if (!email) {
        return res.status(400).json({ mensagem: "o email é obrigatorio" })
    }
    const instrutor = {
        id: identificadorIntrutor++,
        nome,
        email,
        status: status ?? true
    }

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);

}

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "o nome é obrigatorio" })
    }
    if (!email) {
        return res.status(400).json({ mensagem: "o email é obrigatorio" })
    }
    if (!status) {
        return res.status(400).json({ mensagem: "o status é obrigatorio" })
    }
    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrador' })
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(203).send()

}
module.exports = {
    listarIntreutores,
    obterInstrutor,
    cadastrarIntrutor,
    atualizarInstrutor
}