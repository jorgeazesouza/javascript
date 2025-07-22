/*
// Estrutura condicional

// Regras
// "if" pode ser usado sozinho
// Sempre que utilizo a palavra "else", preciso de um if antes
// Pode ter varios "else ifs" na checagem
// Só pode ter um "else" na checagem, e no final
// Podemos usar condições sem else if, usando apenas if e else

// Exemplo 1 - dar hora definida
const hora = 23;

if(hora >= 0 && hora < 12) {
    console.log('Bom dia!');
} else if(hora < 18) {
    console.log('Boa tarde!');
} else if(hora < 24) {
    console.log('Boa noite!');
} else {
    console.log('Olá');
}

// Exemplo 2 - ter dinheiro
const tenhoDinheiro = false;

if(tenhoDinheiro) {
    console.log('Vou sair de casa!');
} else {
    console.log('Não vou sair de casa!')
}
*/