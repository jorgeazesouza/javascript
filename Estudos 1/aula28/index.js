/*
// Documentação - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// const data = new Date(); // Date é uma função construtora

// Marco zero - Timestamp unix ou época unix
// Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
const tresHoras = 60 * 60 * 3 * 1000; // "1000" para ter o valor em milesimos de segundos
const umDia = 60 * 60 * 24 * 1000;
// para encontrar uma data anterior valor negativo, posterior valor positivo
const data = new Date(0 + tresHoras + umDia); // 02/01/1970
console.log(data.toString());

//                    Ano  mês dia hr  min  s   ms 
const data = new Date(2019, 3, 20, 15, 27, 14, 888); // mês - 0 Janeiro / 11 Dezembro
console.log(data.toString());

*/
const data = new Date('2019-04-20 20:15:59.100'); // DateString
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia na semana', data.getDay()); // 0 - Domingo, 6 - Sábado

console.log(Date.now()); // obter a data por milésimos de segundos