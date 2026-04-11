// For in -> lê os índices [array] ou chaves {Objeto}
const frutas = ['Pêra', 'Maça', 'Uva'];

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let index in frutas) {
    console.log(frutas[index]);
}
*/

const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Azevedo',
    idade: 21
};

// console.log(pessoa.nome); // Jorge
// console.log(pessoa['nome']); // Jorge

// Pegar chaves
for (let key in pessoa) {
    console.log(key, pessoa[key]);
}