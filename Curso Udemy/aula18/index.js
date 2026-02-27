// Array - Lista
/*
// podemos colocar qualquer coisa dentro dos arrays (string, number, boolean, function, object, etc...)
const alunos = ['Jorge', 'Jássica', 'Victor', 1, true, null];

// porem não é uma boa prática de programação o ideal é colocar somente um tipo de dado
// const alunos = ['Jorge', 'Jássica', 'Victor'];
console.log(alunos);
*/

// Assim como strings arrays são indexados, mas por elementos
// indece        0        1          2
const alunos = ['Jorge', 'Jéssica', 'Victor'];

/*
// Acessar indice do array
console.log(alunos[0]); // Jorge

// Editar valor do Array
alunos[0] = 'Eduardo';
console.log(alunos); // [ 'Eduardo', 'Jéssica', 'Victor' ]

// Verificar o tamanho do array
console.log(alunos.length); // 3

// Criar novos elementos no array
alunos[3] = 'Maria';
console.log(alunos); // [ 'Jorge', 'Jéssica', 'Victor', 'Maria' ]

// utilizando o tamanho do array atual para adicionar novos valores
alunos[alunos.length] = 'Fernanda';
alunos[alunos.length] = 'Celso';
alunos[alunos.length] = 'Gabrielle';
alunos[alunos.length] = 'Renan';

console.log(alunos); // [ 'Jorge', 'Jéssica', 'Victor',  'Fernanda', 'Celso', 'Gabrielle', 'Renan' ]

// push() - Adiciona um novo elemento no final
alunos.push('Fernanda');
alunos.push('Celso');

console.log(alunos); // [ 'Jorge', 'Jéssica', 'Victor', 'Fernanda', 'Celso' ]

// unshift() - Adiciona um novo elemento no começo
alunos.unshift('Fernanda');
alunos.unshift('Celso');

console.log(alunos); // [ 'Celso', 'Fernanda', 'Jorge', 'Jéssica', 'Victor' ]

// pop() - Remove elementos no final do array
alunos.pop();
console.log(alunos); // [ 'Jorge', 'Jéssica' ]

// shift() - Remove elementos do começo do array
alunos.shift();
console.log(alunos); // [ 'Jéssica', 'Victor' ]

// podemos guardar o valor em uma variável
const removido = alunos.pop();
console.log(removido); // Victor

// podemos guardar o valor em uma variável
const removido = alunos.shift();
console.log(removido); // Jorge

// delete apaga um elemento do array sem alterar os indices
delete alunos[1];
console.log(alunos); // [ 'Jorge', <1 empty item>, 'Victor' ]

// indices que não existem são definidos como undefined
console.log(alunos[50]); // undefined

// Podemos fatiar um array utilizando o slice()

// indices       0        1          2            3         4
const alunos = ['Jorge', 'Jéssica', 'Victor']; // Fernanda, Celso

alunos.push('Fernanda');
alunos.push('Celso');

console.log(alunos.slice(0, 3)); // [ 'Jorge', 'Jéssica', 'Victor' ]
console.log(alunos.slice(0, -1)); // [ 'Jorge', 'Jéssica', 'Victor', 'Fernanda' ]
*/

// Array é considerado um Objeto
console.log(typeof alunos); // object

// Saber se a variável é uma instancia de Array
console.log(alunos instanceof Array); // true
