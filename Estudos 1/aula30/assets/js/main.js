const text = document.querySelector('.container h1');

const data = new Date();
const dia = data.getDate(); // Pegar o dia
const ano = data.getFullYear(); // Pegar o ano

const diaSemana = data.getDay(); // Pegar o dia da semana
const diaSemanaTexto = getdiaSemanaTexto(diaSemana); 

// Transformar o dia da semana em texto
function getdiaSemanaTexto(dia) {
    let diaSemanaTexto;

    switch(dia) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

const mes = data.getMonth() + 1; // Pegar o mês
const mesTexto = getMesTexto(mes);

// Transformar o mes em texto
function getMesTexto(mes) {
    let mesTexto;

    switch(mes) {
        case 1:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 2:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 3:
            mesTexto = 'Março';
            return mesTexto;
        case 4:
            mesTexto = 'Abril';
            return mesTexto;
        case 5:
            mesTexto = 'Maio';
            return mesTexto;
        case 6:
            mesTexto = 'Junho';
            return mesTexto;
        case 7:
            mesTexto = 'Julho';
            return mesTexto;
        case 8:
            mesTexto = 'Agosto';
            return mesTexto;
        case 9:
            mesTexto = 'Setembro';
            return mesTexto;
        case 10:
            mesTexto = 'Outubro';
            return mesTexto;
        case 11:
            mesTexto = 'Novembro';
            return mesTexto;
        case 12:
            mesTexto = 'Dezembro';
            return mesTexto;
    }
}

// Colocar um zero a esquerda dos números
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

const horas = zeroAEsquerda(data.getHours()); // Pegar a hora
const min = zeroAEsquerda(data.getMinutes()); // Pegar os minutos

text.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}`;
text.innerHTML += `<div>${horas}:${min}</div>`;
