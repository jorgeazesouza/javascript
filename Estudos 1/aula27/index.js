// Operadores ternários -> ? :
const pontuacaoUsuario = 1000;

// (condição) ? -> 'Valor para verdadeiro' : -> 'valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuários VIP' : 'Usuário normal';
/*
if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/
console.log(nivelUsuario);

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);
