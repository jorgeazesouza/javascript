// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number)
// Retorne True se a imagem estiver no modo paisagem.
/*
// Solução
const ePaisagem = (largura, altura) => largura > altura ? true : false;
*/
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(500, 500));