/*
Operadores Lógicos 
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true
const dinheiro = true;
const sol = true;
const sair = dinheiro && sol;
console.log(sair); // true

|| -> OR -> OU - Apenas uma expressão precisa ser verdadeira para retornar true
const dinheiro = false;
const sol = true;
const sair = dinheiro || sol;
console.log(sair); // true

! -> NOT -> NÃO - Inverte uma expressão
console.log(!true); // false
console.log(!false); // true

const dinheiro = false;
const sol = false;
const sair = !dinheiro && !sol
console.log(sair); // true

// Exemplo prático de um form que usuário digitou
// suponha que os dados venham de uma base de dados ou formulário
const usuario = 'Jorge'; // Usuário Digitado
const senha = '123456'; // Senha Digitada

//                       True                 True
const vaiLogar = usuario === 'Jorge' && senha === '123456';

//                       True                 False
const vaiLogar = usuario === 'Jorge' && senha === '12345';
*/