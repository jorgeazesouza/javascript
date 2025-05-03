/*
Luiz Otávio Miranda tem 30 anos pesa 84kg
tem 1.80 e sei IMC é de undefined
Luiz Otávio nasceu em 1995.
*/

const nome = 'Jorge Azevedo';
const sobrenome = 'de Souza';
const idade = 20;
const peso = 75;
const alturaEmM = '1.68';
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

imc = peso / alturaEmM ** 2;
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de ${alturaEmM} e sei IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);