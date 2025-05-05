/*
Ordem de precedencia
1º -> ()
2º -> **
3º -> *, /, %
4º -> +, -
*/

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);
console.log(num1 * num2 / num3);

/* 
Operadores de incremento

Incremento = ++
Decremento = --

Pós
contador++; 
contador--;

Pré
++contador;
--contador;
*/

//Operadores de atribuição
let contador = 0;
contador += 2; // contador = contador + 2
contador -= 2;
contador *= 2;
contador **= 2;