const temIngresso = true;
const censura = 16;
const idade = 18;

//ter ingresso e ter idade maior ou igual censura

if (temIngresso === ture) {
    if (idade >= censura) {
        console.log("pode entrar");
    } else {
        console.log("barrada pela censura");
    }
} else {
    console.log("barrada por falta de ingresso")
}