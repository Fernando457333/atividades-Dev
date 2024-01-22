const valorDaCompra = 100;
const numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    //avista-10% de desconto
    const desconto = valorDaCompra * 10 / 100;
    const valorApagar = valorDaCompra - desconto;
    console.log(`voce deve pagar R$ ${valorApagar},pois avista tem 10% de desconto`);

} else {
    //parcelado
    const valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`voc deve pagar R$ ${numeroDeParcelas} parcelas de ${valorDaParcela}`);

}
//usando calculo de juros para entre 7x e 12x seja aplicada uma taxa de
//1% ao mes // M = C.(1+i)n



//    const valorDaCompra = 100;
  //  const numeroDeParcelas = 3;

    //if (numeroDeParcelas === 1) {
      //  //avista-10% de desconto
        //const desconto = valorDaCompra * 10 / 100;
        //const valorApagar = valorDaCompra - desconto;
        //console.log(`voce deve pagar R$ ${valorApagar},pois avista tem 10% de desconto`);

 //   } else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
 //       //parcelado
  //      const valorDaParcela = valorDaCompra / numeroDeParcelas;
    //    console.log(`voc deve pagar em ${numeroDeParcelas}x sem juros de  ${valorDaParcela}`);
//
 //   } else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
   //     //coom juros parcelado
     //   const valorApagarComJuros = valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas
       // const valorDaParcela = (valorApagarComJuros / numeroDeParcelas).toFixed(2)
       // console.log(`voce deve pagar em ${numeroDeParcelas}x de R$ $`{ valorDaParcela } totalizando R$ ${ valorApagarComJuros }, devido a incidencia de juros`)
    //} else {
      //  console.log("Numero de parcelas invalido")
    //}
    
///}
