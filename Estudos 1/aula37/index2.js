/*
//            0123.........
const nome = 'Jorge Azevedo';

// For Clássico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// For in
for (let i in nome) {
    console.log(nome[i]);
}
*/
// const nome = 'Jorge Azevedo';
const nome = ['Jorge', 'Azevedo', 'de' ,'Souza'];

// For of - lê os valores da variável
// não é possível fazer com objeto pois ele não é iteravel
for (let valor of nome) {
    console.log(valor);
}

// For Each
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

// For Clássico - geralmente com iteráveis (arrays ou strings)
// For In - Retorna o índice ou chave (string, arrays ou objetos)
// For Of - Retorna o valor (iteráveis, arrays ou strings)
