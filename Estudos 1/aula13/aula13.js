//               0123456789  
let umaString = "O rato roeu a roupa do rei de roma.";

// Escapar um caractere
let umaString1 = "Um \"texto\"";
console.log(umaString1);

// Encontrar a palavra
console.log(umaString.indexOf('texto')); 
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3)); // Busca de trás para frente

// Expressão regular
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));

// Substituir palavras
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/r/g, '#')); // tag g para repetir para todos

// Pegar o tamanho da String
console.log(umaString.length);

// Fatiamento
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5, -1));

// Divisão por Array
console.log(umaString.split(' ', 3));

// Formas de concatenação 
console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);