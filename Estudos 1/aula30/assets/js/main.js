const text = document.querySelector('.container > h1');

const date = new Date(); // data atual

const dayWeek = date.getDay(); // dia da semana
const day = date.getDate(); // dia do mês
const month = date.getMonth() + 1; // mês
const year = date.getFullYear(); // ano
const hour = date.getHours(); // hora
const minutes = date.getMinutes(); // minuto

// Função para transformar o número da semana em dia da semana
const transformDay = dayWeek;
function numberToWeek (transformDay) {
    switch (dayWeek) {
        case 0: return 'Domingo';
        case 1: return 'Segunda-feira';
        case 2: return 'Terça-feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';
        case 5: return 'Sexta-feira';
        case 6: return 'Sábado';
    }
}
// Função para transformar o número do mês em nome do mês
const transformMonth = month;
function numberToMonth (transformMonth) {
    switch (month) {
        case 1: return 'Janeiro';
        case 2: return 'Fevereiro';
        case 3: return 'Março';
        case 4: return 'Abril';
        case 5: return 'Maio';
        case 6: return 'Junho';
        case 7: return 'Julho';
        case 8: return 'Agosto';
        case 9: return 'Setembro';
        case 10: return 'Outubro';
        case 11: return 'Novembro';
        case 12: return 'Dezembro';
    }
}

text.innerHTML = `${numberToWeek()}, ${day} de ${numberToMonth()} de ${year} ${hour}:${minutes}`;