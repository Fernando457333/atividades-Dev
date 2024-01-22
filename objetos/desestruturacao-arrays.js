const array = [1, 2, 3, 4, 5]

//const a = array[o]
//const a = array[1]

const [a, b, ...resto] = array//forma facil de desestruturar

console.log(a, b, resto)