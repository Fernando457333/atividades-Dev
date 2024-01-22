function inverterstring(texto) {

    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let textoInvertido = "";
    for (let letra of arrayDeLetras) {
        //textoInvertido = textoInvertido + letra
        textoInvertido += letra;
    }
    console.log(textoInvertido)
}

inverterstring("cubos academy")
//desta forma inverte um texto onde uma função recebe parametros do tipo string
//e imprime essa string invertida