// Atibuição via Desestruturação com Objetos
const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Azevedo',
    idade: 21,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};
// const {nome, sobrenome, idade} = pessoa;
// const {nome = 'Luiz', sobrenome, idade} = pessoa; // Definir valor da variável
// const {nome: teste = 'João', sobrenome, idade} = pessoa; 
// const {endereco: {rua, numero}} = pessoa;

// console.log(nome, sobrenome, idade);
// console.log(rua, numero);

const {nome, sobrenome, ...resto} = pessoa;

console.log(nome, sobrenome, resto);