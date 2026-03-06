// Tipos Primitivos (imutáveis): string, number, boolean, undefined, null, (bigit e symbol) - valores copiados
/*
    // Dado imutável
    //          01234
    let nome = 'Jorge';
    console.log(nome[0], nome); // J
    nome[0] = 'G';
    console.log(nome[0], nome); // J
    
    // Quando o dado é primitivo não podemos alterar o valor copiado por referência
    let a = 'A';
    let b = a; // cópia do valor de a para variavel de b
    
    console.log(a, b); // A A
    
    a = 'Outro valor';
    
    console.log(a, b); // Outro valor A
    
    // Referência (mutáveis): array, object e function - valores passados por referência
    let a = [1, 2, 3];
    let b = a; // b aponta para o mesmo local na memoria de a
    console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]
    
    a.push(4);
    console.log(a, b); // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
    
    b.pop();
    console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]

    // Objetos
    const a = {
        nome: 'Jorge',
        sobrenome: 'Souza'
    };
    const b = a;
    console.log(b); // { nome: 'Jorge', sobrenome: 'Souza' }

    a.nome = 'João';
    console.log(b); // { nome: 'João', sobrenome: 'Souza' }
    
    // copiando sem apontar no mesmo local na memoria "Spreach"
    let a = [1, 2, 3];
    let b = [...a]; // cópia
    let c = b;
    console.log(a, b, c); // [ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
    
    a.push(4);
    console.log(a, b, c); // [ 1, 2, 3, 4 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
    
    b.pop();
    console.log(a, b, c); // [ 1, 2, 3, 4 ] [ 1, 2 ] [ 1, 2 ]
    
    const a = {
        nome: 'Jorge',
        sobrenome: 'Souza'
    };
    const b = {...a};

    a.nome = 'João';
    console.log(a); // { nome: 'João', sobrenome: 'Souza' }
    console.log(b); // { nome: 'Jorge', sobrenome: 'Souza' }
*/

