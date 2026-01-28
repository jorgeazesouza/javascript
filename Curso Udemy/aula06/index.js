// variáveis com let - colocar um valor na memória

/*
// variável (nome da váriavel) = (valor da variável);
let nome = 'Henrique';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
*/
// Podemos declarar uma variável sem definir um valor para ela
let nome; // Declarou a variável
console.log(nome); //undefined - não tem valor

nome = 'João'; // Inicializando a variável
console.log(nome);

nome = 'Pedro'; // mudar o valor da variável
console.log(nome);
/*  
    Regras

    Não podemos criar variáveis com palavras reservadas (ex: let if;)
    Variáveis precisam ter nomes significativos (ex: let nomeCliente = 'João';)
    Não pode começar o nome de uma variável com número (ex: let 1nome;)
    Não podem conter espaços ou traços (ex: let nome-Cliente;/ let nome Cliente;)
    Utilizamos camelCase para variáveis compostas (ex: let nomeDoCliente = 'Douglas';)
    Case-sensitive, letras maiúsculas e minusculas fazem direfença (ex: let nome é difetente de let Nome)
    Não podemos redeclarar a variável com "let" somente modificar o valor da variável
    Não utilizr VAR, utilize LET quando achar que precisa alterar o valor da variável.
*/