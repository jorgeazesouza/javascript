// Break e Continue
// Continue - continua para a próxima iteração
// Break - sai do laço de repetição

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // Volta para o começo do laço
    }
    
    if (numero === 7) {
        console.log('7 encontrado saindo...');
        break; // Encerra o laço de repetição
    }
    console.log(numero);
}

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Volta para o começo do laço
    }
    
    if (numero === 7) {
        console.log('7 encontrado saindo...');
        i++;
        break; // Encerra o laço de repetição
    }
    
    console.log(numero);
    i++;
}
*/

do {
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue; // Volta para o começo do laço
    }
    
    if (numero === 7) {
        console.log('7 encontrado saindo...');
        i++;
        break; // Encerra o laço de repetição
    }
    
    console.log(numero);
    i++;
} while (i < numeros.length);