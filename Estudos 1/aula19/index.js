/* 
Tipos de dados Primitivos (imutávis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Tipos de dados por Referência (mutável) - array, object, function - passado por referencia

// Não estamos mudando o valor primitivo "let" estamos mudando o valor dele de 'Jorge' -> 'Azevedo'
let nome = 'Jorge';
nome = 'Azevedo';
console.log(nome);

// Não podemos mudar o valor de um tipo primitivo
//          01234
let nome = 'Jorge';
nome[0] = 'G'; // string é um valor primitivo, não podemos fazer isso ela é imutável
console.log(nome[0], nome);

// Valores com tipos primitivos - valores imutáveis
let a = 'A';
let b = a; // Copiando o valor de A para variável b
console.log(a, b); // A A

a = 'Outra coisa';
console.log(a, b); // Outra coisa A

// Valores passados por referência - valores mutáveis
let a = [1, 2, 3];
let b = a; // b e a apontam para o mesmo valor na memória

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]

a.push(4);
console.log(a, b); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

b.pop();
console.log(b, a); // [ 1, 2, 3 ] [ 1, 2, 3 ]

let c = b; // aponta para o mesmo local na memória de a e b
console.log(c); // [ 1, 2, 3 ]

// copiar valores sem apoontar para mesmo local da memória mas utilizando valores por referencia
let a = [1, 2, 3];
let b = [...a]; // valor copiado para a variável b de maneira independente

a.push(4);
console.log(a, b); // [ 1, 2, 3, 4 ] [ 1, 2, 3]

// Valores por referencia com objetos
const a = {
    nome: 'Jorge',
    sobrenome: 'Azevedo'
};
const b = {...a}; // ... são chamados de spread 

a.nome = 'João';
console.log(a);
console.log(b);
*/