/*
Luiz Otávio Miranda tem 30 anos pesa 84kg
tem 1.80 de 1.80 e sei IMC é de undefined
Luiz Otávio nasceu em 1995.
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = '1.80';
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

imc = peso / alturaEmM ** 2;
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de ${alturaEmM} e sei IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);