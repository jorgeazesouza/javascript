/*
// Break e Continue
// Continue - pula para próxima iteração do laço, mas continua executando

// Exemplo 1 - com for of
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }
    console.log(numero); // console 1 3 4 5 6 7 8 9
}

// Exemplo 1.1
for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }

    if (numero === 5) {
        continue;
    }

    console.log(numero); // console 1 3 4 6 7 8 9
}

// Exemplo 1.2
for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // pula para próxima repetição do laço
        // console 1 3 4 5 6 7 8 9
    }

    if (numero === 5) {
        continue;
    }

    console.log(numero); // console 1 Pulei o número 2 3 4 6 7 8 9
}

// Break - quebra/termina o laço de repetição

// Exemplo 1 - com for of
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 7) {
        console.log('7 encontrado, saindo!');
        break;
    }

    console.log(numero);
}

// Exemplo 1.1 - com for in
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 7) {
        console.log('7 encontrado, saindo!');
        break;
    }

    console.log(numero);
}

// Exemplo 1.2 - com for
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 7) {
        console.log('7 encontrado, saindo!');
        break;
    }

    console.log(numero);
}
// Exemplo 2 - com while
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o 2');
        i++; // Atualizar a iteação para não ficar infinito antes do continue
        continue;
    }
    
    if (numero === 7) {
        console.log('7 encontrado, saindo!');
        i++; // Atualizar a iteação para não ficar infinito antes do break
        break;
    }
    
    console.log(numero);
    
    i++;
}
*/
// Exemplo 2.1 - com do while
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o 2');
        i++; // Atualizar a iteação para não ficar infinito antes do continue
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo!');
        i++; // Atualizar a iteação para não ficar infinito antes do break
        break;
    }

    console.log(numero);

    i++;
} while (i < numeros.length);