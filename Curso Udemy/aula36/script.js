// For Clássico

/*
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

// Estrutura de Repetição Clássica

// for (Variável; Condição; Incrementar Variável) { bloco de código }
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

// Podemos modificar a variável, condição e incremento do indice
for (let i = -100; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

// for (Variável; Condição; Incrementar Variável) { bloco de código }
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

// Exemplo - Par e Ímpar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? `Par` : `Ímpar`;
    console.log(i, par);
}
*/
//               0       1       2
const frutas = ['Maça', 'Pêra', 'Uva', 'Abacaxi', 'Banana', 'Abacate', 'Kiwi'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} -`, frutas[i]);
}