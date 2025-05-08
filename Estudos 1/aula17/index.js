const raiz = function(n) {
    return n ** 0.5
};

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5


/*
// sintax da função
function saudacao(nome - parâmetro) {
    return (`Bom dia! ${nome}!`); // fazer a função retornar um valor
}

function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}
saudacao('Jorge');
saudacao('Gaby');
saudacao('Felipe');

// a função não retorna valor nenhum
const variavel = saudacao('Jorge');
console.log(variavel); // undefined

// fazer a função retornar um valor utilizando "return"
function saudacao(nome) {
    return `Bom dia ${nome}!`
}
const variavel = saudacao('Jorge');
console.log(variavel); // Bom dia Jorge!

// Utilizando função para fazer soma
function soma(a, b) {
    const resultado = a + b;
    return resultado;
}
console.log(soma(2, 2)); // 4
console.log(soma(3, 1)); // 4
console.log(soma(5, 10)); // 15

// ao encontrar o return nada abaixo dele será execultado
function soma(a, b) {
    const resultado = a + b;
    return resultado;
    console.log('Olá Mundo!');
}
const resultado = soma(2, 2);
console.log(resultado); // 4

// valores nos parâmetros
function soma(a = 1, b = 1) {
    const resultado = a + b;
    return resultado;
}
const resultado = soma();
console.log(resultado);

// função anônima
// função dentro de uma variável
const raiz = function(n) {
    return n ** 0.5
}; // preciso terminar com ; pois está dentro de uma variável

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5

// arrow function - simplificação, substituindo "function" por "=>", não precisa de chaves
e não precisa de parâmetros e nem return
const raiz = n => n ** 0.5;

console.log(raiz(9)); // 3
console.log(raiz(16)); // 4
console.log(raiz(25)); // 5
*/