//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);

/*
// Atribuição via desestruturação
// [desestruturação] = [atribuição]

// índice        0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros; // ... rest (pegar o resto), ...spread (espalhar/distribuir)

console.log(um, dois, tres); // 1000, 2000, 3000
console.log(resto); // 4000, 5000, 6000, 7000, 8000, 9000

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[1][2]); // 6
const [,[,,seis]] = numeros; // 6

const [lista1, lista2, lista3] = numeros;
*/