const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Souza',
    idade: 21,
    endereco: { // Objeto dentro de um objeto
        rua: 'Peixoto',
        numero: 200
    }
};
/*
// Atribuição normal
const nome = pessoa.nome; // Jorge

// Atribuição via desestruturação (Objetos)
const {nome, sobrenome, idade} = pessoa;

// Maneiras que podem ser feitas
const {nome = '', sobrenome, idade} = pessoa; // posso declarar variavel se não tiver
const {nome: teste, sobrenome, idade} = pessoa; // renomear a variável
const {nome: teste = '', sobrenome, idade} = pessoa; 
*/

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, sobrenome, resto);

/*
// Pegar valores dos objetos aninhados
const {endereco: {endereco} = pessoa;
const {endereco: {rua, numero}} = pessoa;
const {endereco: {r = 12345, numero}} = pessoa; // posso declarar variavel se não tiver
const {endereco: {rua: r, numero}, endereco} = pessoa; // renomear a variável
const {endereco: {rua: r = 12345, numero}} = pessoa;
*/