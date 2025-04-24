const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Souza',
    idade: 20,
    endereco: {
        rua: 'Peixoto',
        numero: 200
    }
};

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);

/*
const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Souza',
    idade: 20,
    endereco: {
        rua: 'Peixoto',
        numero: 200
    }
};

// Atribuição via desestruturação (Objetos)
const {nome, sobrenome, idade} = pessoa;
const {nome = '', sobrenome, idade} = pessoa; // posso declarar variavel se não tiver
const {nome: teste, sobrenome, idade} = pessoa; // renomear a variável
const {nome: teste = '', sobrenome, idade} = pessoa; 

// Pegar valores dos objetos aninhados
const {endereco: {endereco} = pessoa;
const {endereco: {rua, numero}} = pessoa;
const {endereco: {r = 12345, numero}} = pessoa; // posso declarar variavel se não tiver
const {endereco: {rua: r, numero}, endereco} = pessoa; // renomear a variável
const {endereco: {rua: r = 12345, numero}} = pessoa; 

const {nome, sobrenome, ...resto} = pessoa;
*/