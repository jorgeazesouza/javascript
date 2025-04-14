// IEE 754-2008 (padrão)
let num1 = 0.7;
let num2 = 0.1;

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
console.log(num1);
console.log(Number.isInteger(num1));

/*
.toString() - Transforma em String
console.log(num1.toString() + num2);
num1 = num1.toString();

.toString(2) - Representação binária
console.log(num1.toString(2));

.toFixed - define casas após a virgula
console.log(num1.toFixed(2));

.isInteger - Verifica se o número é inteiro
console.log(Number.isInteger(num1));

.isNaN - Verifica se a conta é um NaN (true or false)
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));
*/

