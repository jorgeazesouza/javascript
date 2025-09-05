/*
// Exercício anterior
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// Atribuição via desestruturação
// [desestruturação] = [atribuição]

// 1.1
[a, b, c] = [1, 2, 3]; // reatribuindo valores das variáves através de uma lista

// 1.2
const numeros = [1, 2, 3];
[a, b, c] = numeros;

console.log(a, b, c); // 1 2 3

// Respondendo Exercício anterior com a Atribuição via Desestruturação
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c); // B C A

// índice        0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros; // ... rest (pegar o resto), ...spread (espalhar/distribuir)

console.log(um, dois, tres); // 1000, 2000, 3000
console.log(resto); // 4000, 5000, 6000, 7000, 8000, 9000

// Lista dentro de outra lista
// 1.1
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]); // 6

// 1.2
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]); // 9

// Lista dentro de outra lista por Atribuição via Desestruturação
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [,[,,seis]] = numeros; // 6
console.log(seis); // 9
*/