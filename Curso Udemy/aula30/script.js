// Objeto Date() - função construtora

// Meses começa do 0 e vai até o 11
// Dia da semana 0 - Domigo e 6 - Sábado
// Completa com zero caso omita alguma informação

/*
// new Date()
const data = new Date(); // função construtora começa com letra MAIUSCULA
console.log(data.toString()); // Wed Apr 01 2026 15:58:08 GMT-0300 (Horário Padrão de Brasília)

// Timestamp Unix ou Época Unix - Marco Zero
const tresHoras = 60 * 60 * 3 * 1000; // 60*60(1h) * 3 (3h) * 1000 (3000 milesimos de segundos)
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // (02/01/1970)
console.log(data.toString());

// new Date(valor)
// new Date(Ano, Mês, Dia, Hora, Minuto, Segundo, Milisegundos)
const data = new Date(2019, 3, 20, 15, 14, 27, 500);
console.log(data.toString());

// new Date(dataString)
const data = new Date('2019-04-20 20:20:59');
console.log(data.toString());
*/

const data = new Date('2019-04-20 20:20:59.100');
console.log('Dia', data.getDate()); // Pegar o dia
console.log('Mês', data.getMonth() + 1); // Pegar o mês
console.log('Ano', data.getFullYear()); // Pegar o ano
console.log('Hora', data.getHours()); // Pegar as horas
console.log('Minuto', data.getMinutes()); // Pegar os minutos
console.log('Segundo', data.getSeconds()) // Pegar os segundos
console.log('Ms', data.getMilliseconds()); // Pegar os milisegundos
console.log('Dia da Semana', data.getDay()); // Pegar o dia da semana

console.log(data.toString()); // Pega toda a data
console.log(Date.now()); // Pega a data com os milesimos de segundos