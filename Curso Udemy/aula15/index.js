/*
// Escapar um caractere
let umaString = 'Um \"texto\"';
console.log(umaString); // Um "texto"

// String são indexadas e podemos pegar os índices com []
// indice        01234567
let umaString = 'Um texto';
console.log(umaString[4]); // e

// utilizando funcção para pegar um índice - charAt()
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.charAt(6)); // t

// utilizando funcção para concatenar com concat()
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.concat(' em um, lindo dia.')); // Um texto em um, lindo dia
console.log(umaString + ' em um, lindo dia.'); // sinal de +
console.log(`${umaString} em um, lindo dia.`); // Template String

// pesquisar por um índice utilizando a função indexOf()
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.indexOf('texto')); // 3 - retorna o índice que começa a palavra
console.log(umaString.indexOf('Um')); // 0
console.log(umaString.indexOf('o', 3)); // 7 - começa por um índice definido ('indice', começo)

// pesquisar por um índice pelo final utilizando a função lastIndexOf()
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.lastindexOf('o')); // 7
console.log(umaString.lastindexOf('m', 3)); // 1

// Expressões regulares

// match() - retorna todas as letras minusculas de a-z na string
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.match(/[a-z]/g)); // [ 'm', 't', 'e', 'x', 't', 'o' ]
console.log(umaString.match(/[a-z]/)); // [ 'm', index: 1, input: 'Um texto', groups: undefined ]

// search() - retorna o índice onde foi encontrado o que eu pedi
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.search(/[a-z]/)); // 1
console.log(umaString.search(/[x]/)); // 5

// replace() - substitui a string
// indice        01234567
let umaString = 'Um texto';
console.log(umaString.replace('Um', 'Outra')); // Outra texto

// indice        0123456789
let umaString1 = 'O rato roeu a roupa do rei de roma';
console.log(umaString1.replace(/r/g, '#')); // O #ato #oeu a #oupa do #ei de #oma.

// Saber o tamanho de uma string utilizando lenght
// indice        0123456789
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.length); // 35

// Cortar uma parte da string pelos indices utilizando slice()
// indice        0123456789
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.slice(2, 6)); // rato
console.log(umaString.slice(-3)); // ma.
console.log(umaString.slice(-5)); // roma.
console.log(umaString.slice(-5, -1)); // roma

// substring() - faz o mesmo que slice so que mais dificil
// indice        0123456789
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.length - 5, umaString.length - 1); // rato

// Dividir uma string por e agrupar em um array com split()
// indice        0123456789
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.split(' ')); // ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.']
console.log(umaString.split(' ', 2)); // ['O', 'rato']

// Deixar a string em letras MAIUSCULAS 
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.toUpperCase()); // O RATO ROEU A ROUPA DO REI DE ROMA.
*/

// Deixar a string em letras minusculas 
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.toLowerCase()); // o rato roeu a roupa do rei de roma.