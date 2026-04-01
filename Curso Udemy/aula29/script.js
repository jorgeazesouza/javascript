// Operação Ternária ( ? : ) - If e Else
const pontUsuario = 999;
/*
// Condição (If e Else)
if (pontUsuario >= 1000) {
    console.log('Usuário VIP!');
} else {
    console.log('Usuário Normal.');
}
*/
// Simplificação com Operação Ternária
//                   (condição) ? 'valor para verdadeiro' : 'valor para falso';
const nivelUsuario = pontUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);

// Exemplo
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao);