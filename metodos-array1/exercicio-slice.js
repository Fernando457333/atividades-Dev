function filtrar80(dados) {
    const startIndex = Math.round(dados.lenght * 10 / 100);
    const endIndex = math.round(dados.lenght * 90 / 100);
    const fatia = dados.slice(startIndex, endIndex);
    console.log(fatia);
}//podendo usar Math.ceil que joga para cima o aredondamento
//e Math.floor que joga para baixo o aredondamento
//no exemplo usamos Math.round que decide por si só

const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 46, 68,
    49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];//25

filtrar80(dados);

