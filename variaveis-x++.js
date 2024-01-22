let x = 10;
//x = x + 1;
//x += 1;
x++;
console.log(x);

//outro exemplo é colocar x++ "primeiro retorna,depois soma"

let y = x++;
console.log("x: ", x);
console.log("y: ", y);
//x é 12 e y é 11

//agora com ++x "primeiro ele soma e depois retorna"

y = ++x;
console.log("x: ", x);
console.log("y: ", y);
// x é 13 e y é 13
