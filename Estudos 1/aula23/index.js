/*
Avaliação de curto circuito

&& -> apenas uma expressão falsa para todas serem falsas
|| -> todas as expressões precisam ser falsas para ser falso 

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
*/


/*
function falaOi() {
    return 'Oi';
}
let vaiExecultar;
console.log(vaiExecultar && falaOi());
*/