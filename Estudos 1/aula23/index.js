/*
&&
||

FALSY
*false
0
' "" ``
null / undefined
NaN

Qualquer coisa ao contrario de FALSY é verdadeiro
*/

function falaOi() {
    return 'Oi';
}
let vaiExecultar;
console.log(vaiExecultar && falaOi());