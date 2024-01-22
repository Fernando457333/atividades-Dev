const arquivos = [
    'teste.jpg',
    'foto.png',
    'contrato.doc',
    'instalador.exe'
]
//para achar um arquivo com nome ".bat" usamos este codigo 
const detected = (fiscalizar) => {

    const resultado = fiscalizar.some((virus) => {
        const existeVirus = virus.indexOf(".bat")//indexOf acha um elemento desejado em uma array
        return existeVirus !== -1
    });
    if (resultado === true) {
        console.log("virus detectado!!")
    } else {
        console.log("nenhum virus encontrado")
    }
}

detected(arquivos)
