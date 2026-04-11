// For of - lê os valores do índice ou chave
// indice     0123456789...
// const nomes = 'Jorge Azevedo';
// const nomes = ['Jorge', 'Azevedo', 'de', 'Souza'];

/*
// For Clássico - geralmente com iteráveis, como arrays ou strings
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// For in - Retorna o índice ou chave (string, array ou objeto)
for (let i in nomes) {
    console.log(nomes[i]);
}

// For of - Retorna o valor em si, funciona com iteráveis, como arrays ou strings
for (let valor of nomes) {
    console.log(valor);
}

// For Each - função que retorna o valor, índice e o array completo
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});
*/

const pessoa = {
    nome: 'Jorge',
    sobrenome: 'Azevedo'
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}