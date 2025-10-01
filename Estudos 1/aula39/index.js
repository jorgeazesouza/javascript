/*
// While e Do While
const nome = 'Jorge';
let i = 0;

// While (condição) { bloco de comando e atualiza a variável de controle }
while (i <= 10) {
    console.log(i);
    i++; // Atualizar a variável de controle
}

// Utilizando Strings
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}
*/
// Exemplo com Funções

// Gerando um número aleatório
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// While - Checa a condição e executa o código
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('#################');
// Do while - Executa a condição e depois checa
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);