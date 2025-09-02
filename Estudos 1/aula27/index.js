// Operadores ternários -> ? :
const pontuacaoUsuario = 1000;

// (condição) ? 'Valor para verdadeiro' : 'valor para falso';
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
/*
if(pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/
console.log(nivelUsuario);

const corUsuario = 'Rosa';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);
