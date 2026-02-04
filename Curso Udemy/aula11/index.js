// Operadores Aritméticos, de atribuição e incremento

/* Aritméticos 

    +  = Adição / Concatenação
    -  = Subtração
    /  = Divisão
    *  = Multiplicação
    ** = Potênciação
    %  = Resto da Divisão

    Ordem de precedência

    () = Primeiro
    ** = Segundo
    * / % = Terceiro
    + - = Quarto
    
    const num = 10;
    const num1 = 5;
    const num2 = 2;
    const numFalso = '5';
    
    console.log(num + num1); // Adição
    console.log(numFalso + num); // Concatenação
    console.log(num - num1); // Subtração
    console.log(num / num1); // Divisão
    console.log(num * num1); // Multiplicação
    console.log(num2 ** num); // Potênciação
    console.log(num1 % num2); // Resto da Divisão
    
    // Incremento e Decremento
    let contador = 1;
    let contadorDecremento = 10;
    
    // Pós - incrementa/decrementa depois
    
    // contador = contador + 1
    contador++; // 2
    contador++; // 3
    contador++; // 4
    contador++; // 5
    
    // contadorDecremento = contadorDecremento - 1
    contadorDecremento--; // 9
    contadorDecremento--; // 8
    contadorDecremento--; // 7
    contadorDecremento--; // 6
    
    Pré - incrementa/decrementa antes
    
    ++contador; // 2
    ++contador; // 3
    ++contador; // 4
    ++contador; // 5
    
    --contadorDecremento; // 9
    --contadorDecremento; // 8
    --contadorDecremento; // 7
    --contadorDecremento; // 6
    
    console.log(contador);
    console.log(contadorDecremento);

    // Atribuição
    const passo = 2;
    let contador = 0;
    
    contador = contador + passo;
    console.log(contador); // 2
    contador = contador + passo;
    console.log(contador); // 4
    contador = contador + passo;
    console.log(contador); // 6
    
    // Simplificação usando atribuição
    contador += passo; // contador = contador + passo
    
    // Operadores de Atribuição
    contador += passo;
    contador -= passo;
    contador *= passo;
    contador **= passo;

    // NaN - Not a Number
    const num1 = 10;
    const num2 = 'Jorge';
    console.log(num1 * num2); // NaN
    
    // parseInt() - converte número para inteiro
    const num1 = 10;
    const num2 = parseInt('5');

    // parseFloat() - converte número com casas decimais
    const num1 = 10;
    const num2 = parseFloat('5.2');
*/
// Number - converte em número
const num1 = 10;
const num2 = Number('5.2');

console.log(num1 + num2);

