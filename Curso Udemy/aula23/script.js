/* 
    Operadores de Comparação
    > - maior que
    >= - maior que igual à
    < - menor que
    <= - menor que igual à
    == - igualdade (valor) *pouco utilizado*
    === - igualdade estrita (valor e tipo)
    != - diferente (valor) *pouco utilizado*
    !== - diferente estrito (valor e tipo)
    
    // Operadores de comparação retornam valores booleanos
    console.log(10 > 5); // true
    console.log(10 > 11); // false
    
    console.log(10 >= 10); // true
    console.log(10>= 11); // false
    
    console.log(10 < 11); // true
    console.log(10 < 9); // false
    
    console.log(10 <= 11); // true
    console.log(12 <= 11); // false
    
    // Variáveis
    const num1 = 10;
    const num2 = 11;
    const comp = num1 < num2;
    console.log(comp); // true
*/

// Igualdade (valor)
/*
    // Verdadeiro
    const num1 = 10;
    const num2 = 10;
    const comp = num1 == num2;
    console.log(comp); // true
    
    // Falso
    const num1 = 10;
    const num2 = 11;
    const comp = num1 == num2;
    console.log(comp); // false
    
    // não utilizamos o sinal de igualdade pois ele faz a coersão de tipo 
    // coersão de tipo - converte um tipo em outro
    const num1 = 10; // number
    const num2 = '10'; // string
    const comp = num1 == num2;
    console.log(comp); // true
    
    // Igualdade Estrita (valor e tipo)
    const num1 = 10; // number
    const num2 = '10'; // string
    const comp = num1 === num2;
    console.log(comp); // false
    
    // Diferente
    const num1 = 10; // number
    const num2 = '10'; // string
    const comp = num1 != num2;
    console.log(comp); // false
    
    // Diferente Estrito
    const num1 = 10; // number
    const num2 = '10'; // string
    const comp = num1 !== num2;
    console.log(comp); // true
    
    const num1 = 10; // number
    const num2 = 10; // string
    const comp = num1 !== num2;
    console.log(comp); // false
*/