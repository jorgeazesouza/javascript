const nome = 'Jorge';
const sobrenome = 'Azevedo de Souza'
const idade = 22;
const peso = 70;
const alturaEmM = 1.68;

let indiceMassaCorporal = peso / (alturaEmM * 2);
let anoNascimento = 2026 - idade;

/* Utilizando variáveis e ','
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);
*/

// Template Strings com a `texto ${variável}`
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
