/*
const tresHoras = 60 * 60 * 3 * 1000; // Três horas
const umDia = 60 * 60 * 24 * 1000; // Um dia
const dara = newDate(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix

//                    Ano  mês dia hr  min  s   ms 
const data = new Date(2019, 3, 20, 15, 27, 14, 888); // mês - 0 Janeiro / 11 Dezembro
console.log(data.toString());


*/
const data = new Date('2019-04-20 20:15:59.100');
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia na semana', data.getDay()); // 0 - Domingo, 6 - Sábado

console.log(Date.now());