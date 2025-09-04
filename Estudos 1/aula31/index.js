/*
// 1ª - diferença

// não podemos redeclarar a variável let, somente o valor dela
let nome = 'Jorge';
nome = 'Pedro';

// Aqui podemos redeclarar a variavel e o valor
var nome2 = 'Azevedo';
var nome2 = 'Souza';
*/
/*
const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

// bloco 1
let nome = 'Jorge'; // cirando
var nome2 = 'Jorge'; // cirando

var nome2 = 'Azevedo'; // redeclarando

//bloco 2
if(verdadeira) {
    let nome = 'Jorge'; // cirando outra variável
    var nome2 = 'Rogério'; // redeclarando

    // bloco 3
    if(verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Ronaldo'; // redeclarando
    }
}
console.log(nome, nome2); // Jorge Ronaldo
*/
/*

// variaveis var dentro da função não podem ser puchadas fora dela, mas uma função pode puchar uma variável fora da função no bloco anterior

const verdadeira = true;

function falaOi() {

    if(verdadeira) {
        let nome = 'Jorge';
        var sobrenome = 'Souza';
    }

    console.log(sobrenome);
}

falaOi();
*/
/*
// Hoisting 
// var sobrenome;
console.log(sobrenome); // undefined
var sobrenome = 'Azevedo'; // leva a declaração da variável para o topo do código
*/