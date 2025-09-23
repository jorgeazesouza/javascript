/*
// O vetor é um array
const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// For in - lê os índices do vetor ou chaves do objeto
//               0       1       2
const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}
*/
const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Souza',
    idade: 21
};

/*
for (let chaves in pessoa) {
    console.log(chaves);
}

for (let chaves in pessoa) {
    console.log(chaves);
}

const chave = 'nome';
console.log(pessoa[chave]);
*/
for (let chave in pessoa) {
    console.log(chave ,pessoa[chave]);
}