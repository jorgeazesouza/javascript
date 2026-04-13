// While e Do While
// While checa a condição e executa o laço; Do while execulta o código primeiro e depois checa a condição

/*
let i = 0;
const nome = 'Jorge';

// while (condição) { bloco }
while (i <= 10) {
    console.log(i);
    i++; // Atualizar a variável de controle
}

// Exemplo 1
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}
*/

function random(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
// let rand = random(min, max);
let rand = 10;

/*
while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
*/

// Do While
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);