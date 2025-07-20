/*
Avaliação de curto circuito

&& -> apenas uma expressão falsa para todas serem falsas
|| -> todas as expressões precisam ser falsas para ser falso 

// && -> AND
false && true -> false "retorna o valor da expressão falsa"

console.log('Jorge Azevedo' && 0 && 'Gabrielle Victoria'); // 0

// se todas forem true o JS retorna a ultima expressão
console.log('Jorge Azevedo' && true && 'Gabrielle Victoria'); // Gabrielle Victoria

// Valores que avaliam em false no JavaScript

false -> valor literal em false

FALSY -> valores que avaliam em false quando necessário
0
'' / "" / ``
null / undefined
NaN

*Qualquer coisa ao contrario de valores que avaliam em false no JS é true

function falaOi() {
    return 'Oi';
}

// Para verificarmos se vai execultar ou não precisariamos criar uma condicional para mostrar o oi mas ao inves disso vamos criar um shortcut para verificar

// Exemplo 1
const vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // false

// Exemplo 2
let vaiExecutar; 
console.log(vaiExecutar && falaOi()); // undefined

// Exemplo 3
const vaiExecutar = 'Joãozinho';
console.log(vaiExecutar && falaOi()); // Oi

// || -> OR
// false || true -> false "retorna o valor da expressão verdadeira"

// retorna o primeiro valor verdadeiro
console.log(0 || false || null || 'Jorge Azevedo' || true); // 'Jorge Azevedo'

// Exemplo 1 - seleção de cores
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

// Exemplo 1.1 - seleção de cores
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

// Pegadinha
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // false - porem a string escrita false
*/