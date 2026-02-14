// Numbers
// Padrão de números IEEE 754-2008

/*
Resolver a imprecisão do número
num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0
num1 = Number(num1.toFixed(2))

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
*/

/*
// Transformar um número em uma String - toString()
let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2); // 12.5
console.log(typeof num1); // toString() - coverte o numero para string temporariamente
num1 = num1.toString() // aqui alteramos o valor para string definitivamente

// Representação binaria com - toString()
let num1 = 1500;
let num2 = 2.5;

console.log(num1.toString(2)); // 10111011100

// Definir o número de casas decimais - toFixed()
let num1 = 10.5789551255547;
let num2 = 2.5;

// Os parenteses dentro do toFixed(2) define a quantidade de casas decimais
console.log(num1.toFixed(2)); // 10.58

// Saber se o numero é um número inteiro - isInteger()
let num1 = 10;
let num2 = 2.5;

console.log(Number.isInteger(num1)); // true
console.log(Number.isInteger(num2)); // false
*/

// Saber se o valor não é u número NaN
let num1 = 10.25;
let temp = num1 * 'Olá';

console.log(Number.isNaN(temp)); // true    