// Diferenças entre var e let
const verdadeiro = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

/*
let nome1 = 'Luiz'; // Criando no escobo global
var nome2 = 'Luiz';

var nome2 = 'João'; // Redeclarando

if (verdadeiro) {
    let nome1 = 'Jorge'; // Criando no escopo local
    var nome2 = 'João'; // Redeclarando

    if (verdadeiro) { 
        let nome1 = 'Outra coisa'; // Crinando no bloco aninhado
        var nome2 = 'João'; // Redeclarando
        console.log(nome1, nome2);
    }
}
*/
// var pode ser acessada dentro da função se declarada no escobo global
var sobrenome = 'Souza';

function falaOi() {
    // var não pode ser acessada fora da função se declarada dentro dela
    var nome = 'Luiz';
    console.log(nome, sobrenome);
}

falaOi();