function soma(a, b) {
    const resultado = a + b;
    return resultado;
    console.log('Olá Mundo!');
}

const resultado = soma(2, 2);
console.log(resultado); // 4

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
*/