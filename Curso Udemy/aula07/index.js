// // variáveis com const - constante

const nome = 'João';
console.log(nome);

/*
// não podemos modificar o valor de uma constante
const nome;
nome = 'João';

// não podemos mudar o valor dentro da constante
const nome = 'João';
nome = 'Pedro';
*/

// Podemos colocar uma variável dentro de outra
/* Operadores básicos
    + = soma
    - = subtração
    / = divisão
    * = multiplicação
*/
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log(resultado); // 50
console.log(resultadoDuplicado); // 100

// Saber o tipo de um dado com typeof()
const num = 5;
const text = 'Texto';
console.log(typeof num); // number
console.log(typeof text); // string

// Concatenação - sinal de + com string faz a junção (concatenação) dos valores
const naoNumero = '5';
const numero = 10;
console.log(naoNumero + numero); // 510

/*
    Regras

    Não podemos criar constantes com palavras reservadas (ex: const if;)
    constantes precisam ter nomes significativos (ex: const nomeCliente = 'João';)
    Não pode começar o nome de uma constantes com número (ex: const 1nome;)
    Não podem conter espaços ou traços (ex: const nome-Cliente;/ const nome Cliente;)
    Utilizamos camelCase para constantes compostas (ex: const nomeDoCliente = 'Douglas';)
    Case-sensitive, letras maiúsculas e minusculas fazem direfença (ex: const nome é difetente de const Nome)
    Não podemos modificar o valor de uma constante
    Não utilizr VAR, utilize CONST quando achar que precisa alterar o valor da variável.
*/