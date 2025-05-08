// indices -     0        1        2          3      4
const alunos = ['Jorge', 'Maria', 'João']; // Luiza, Eduardo
console.log(typeof alunos); // object
// instanceof Array - é uma instancia de array - retorna true or false
console.log(alunos instanceof Array); // true


/*
// Podemos colocar qualquer coisa no array
const alunos = ['Jorge', 'Maria', 'João']; // lista de nomes
const numeros = [1, 2, 3]; // lista de números
const boolean = [true, false]; // lista booleana
const object = [null, undefined]; // lista de objetos
const funcao = [alert('Olá'), prompt('Seu nome: '), confirm('Deseja continuar')]; // lista de funções

// Índices no Array
// indices -     0        1        2
const alunos = ['Jorge', 'Maria', 'João'];
console.log(alunos); // ['Jorge', 'Maria', 'João']
console.log(alunos[0]); // Jorge
console.log(alunos[1]); // Maria
console.log(alunos[2]); // João

// Editar valores do Array
const alunos = ['Jorge', 'Maria', 'João'];
alunos[0] = 'Eduardo';
console.log(alunos); // [ 'Eduardo', 'Maria', 'João' ]

// Tamanho do Array
const alunos = ['Jorge', 'Maria', 'João'];
console.log(alunos.length);

// Adicionar elementos no array
const alunos = ['Jorge', 'Maria', 'João'];

// 1º jeito
alunos[3] = 'Luiza'; // ['Jorge', 'Maria', 'João', 'Luiza']

// 2º jeito
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';
console.log(alunos); // [ 'Jorge', 'Maria', 'João', 'Luiza', 'Fábio', 'Luana' ]

// 3º jeito - adicionar um elemento no final do array
alunos.push('Luiza');
alunos.push('Fábio');
console.log(alunos); // [ 'Jorge', 'Maria', 'João', 'Luiza', 'Fábio' ]

// 4º jeito - adicionar um elemento no começo do array
const alunos = ['Jorge', 'Maria', 'João'];
alunos.unshift('Luiza');
alunos.unshift('Fábio');
console.log(alunos); // [ 'Fábio', 'Luiza', 'Jorge', 'Maria', 'João' ]

// Remover elementos no final do Array
const alunos = ['Jorge', 'Maria', 'João'];
alunos.pop();
console.log(alunos); // [ 'Jorge', 'Maria' ]

// Salvar em uma variável elementos removidos
const alunos = ['Jorge', 'Maria', 'João'];
const removido = alunos.pop();
console.log(removido); // João

// Remover elementos no começo do Array
const alunos = ['Jorge', 'Maria', 'João'];
alunos.shift();
console.log(alunos); // [ 'Maria', 'João' ]

// Salvar em uma variável elementos removidos od começo
const alunos = ['Jorge', 'Maria', 'João'];
const removido = alunos.shift();
console.log(removido); // Jorge

// remover do array sem alterar o índice
const alunos = ['Jorge', 'Maria', 'João'];
delete alunos[1];
console.log(alunos); // [ 'Jorge', <1 empty item>, 'João' ]

// acessar indices não definidos retorna undefined
console.log(alunos[50]);

// Fatiamento no Array
// indices -     0        1        2          3      4
const alunos = ['Jorge', 'Maria', 'João']; // Luiza, Eduardo
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, 3)); // [ 'Jorge', 'Maria', 'João' ]

// Tipo do array
// indices -     0        1        2          3      4
const alunos = ['Jorge', 'Maria', 'João']; // Luiza, Eduardo
console.log(typeof alunos); // object
// instanceof Array - é uma instancia de array - retorna true or false
console.log(alunos instanceof Array); // true
*/
