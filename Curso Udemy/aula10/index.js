// Tipos primitivos

// String - Texto
const nome = 'Jorge';
const nome1 = "Jorge";
const nome2 = `Jorge`; // Template Strings

// Number - Número
const num = 10; // inteirro
const num1 = 10.52; // ponto flutuante

// Undefined - Valor indefinido
let nomeAluno; // não aponta para nenhum local na memória

// Null - Nulo
let sobrenomeAluno = null; // não aponta para nenhum local na memória

// Boolean - verdadeiro/falso
const booleanT = true;
const booleanF = false;

// Verificar o tipo
console.log(typeof nome, nome);
console.log(typeof num, num);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno); // null é considerado objeto no JavaScript porém é um bug!
console.log(typeof booleanT, booleanT);


