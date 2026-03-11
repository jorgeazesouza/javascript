/* 
    Operadores Lógicos
    && - AND - E
    || - OR  - OU
    !  - NOT - NÃO
    
    // && - AND - E - Todas as expressões precisam ser verdadeiras para retornar (true)
    const expressaoAnd1 = true && true && true && true;
    console.log(expressaoAnd1); // true
    
    const expressaoAnd2 = true && true && false && true;
    console.log(expressaoAnd2); // false
    
    // || - OR  - OU - Se apenas uma expressão for verdadeira, toda expressão retorna (true)
    const expressaoOr1 = true || false || false || false;
    console.log(expressaoOr1); // true
    
    const expressaoOr2 = false || false || false || false;
    console.log(expressaoOr2); // false
*/

// !  - NOT - NÃO - Inverte o valor

console.log(!false); // true

/*
    // Exemplo - && e ||
    const usuario = 'Jorge'; // form usuario digitou
    const senha = '123456'; // form usuario digitou

    /* 
        Exemplo 1
        const vaiLogar = usuario === 'Jorge' && senha === '123456';
        console.log(vaiLogar); // true
    */ 
    /* 
        Exemplo 2 
        const vaiLogar = usuario === 'Jorge' && senha === '654321';
        console.log(vaiLogar); // false
    */
    /*
        Exemplo 3 - ||
        const vaiLogar = usuario === 'Jorge' || senha === '654321';
        console.log(vaiLogar); // true
    */