/* 
Primitivos (imutávis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - passado por referencia
*/

let a = [1, 2, 3];
let b = [...a]; // copia o valor de a sem ser por referencia

a.pop() = 4
console.log(b);