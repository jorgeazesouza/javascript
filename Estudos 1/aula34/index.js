/*
// Estrutura de repetição for

console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

// For Clássico
// for (criar uma variável de controle + criar uma condição para terminar a repetição + incrementar ou decrementar variável de controle) { corpo do for }
for (let i = 0; i <= 5; i++) { // costuma-se utilizar "i" para variável pois significa index
    console.log(`Linha ${i}`);
}
// Na variavel podemos inciar com o valor que quisermos
let i = 0
let i = 400

// na condição podemos colocar um valor acima ou abaixo da variável
let i = 0; i <= 500; i++
let i = 500; i >= 400; i--

// Na variável de controle podemos colocar o incremento e o decremento pulando a quantidade que quiser
let i = 0; i <= 500; i += 10
let i = 500; i >= 400; i -= 10

// Exemplo 1
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

// Exemplo 2
//               0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva'];

// console.log(frutas.length); // 3
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} -` ,frutas[i]);
}

// Exemplo 2.1
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Melancia', 'Melão', 'Kiwi'];

for(let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} -`,frutas[i]);
}
*/
