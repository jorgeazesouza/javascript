// Atribuição via Desestruturação com Arrays

/*
let A = 'A'; // B
let B = 'B'; // C
let C = 'C'; // A

// [A, B, C] = [1, 2, 3]
const letras = ['B', 'C', 'A'];
[A, B, C] = letras;

console.log(A, B, C);

// ...rest (pega o resto) / ...spread (distribui)

// indice        0     1     2     3     4     8     6     7     8  
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNum, segundoNum, terceiroNum, ...resto] = numeros;

console.log(primeiroNum, segundoNum, terceiroNum); // 1000 2000 3000
console.log(resto); // [ 4000, 5000, 6000, 7000, 8000, 9000 ]

// Podemos pular numeros também
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco, sete); // 1000 3000 5000 7000
*/

// indice            0          1          2
// indice         0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Atribuição via Desestruturação com array
// const [,[,,seis]] = numeros; // mais complexo
const [lista1, lista2, lista3] = numeros;

// console.log(numeros[1][2]); // 6
// console.log(seis); // 6
console.log(lista2[2]); // 6