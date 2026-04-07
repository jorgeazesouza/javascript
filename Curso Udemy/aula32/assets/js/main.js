function data() {
    const title = document.querySelector('.titulo__item');
    
    // Datas
    const date = new Date('2026-04-04');
    const dayWeek = date.getDay();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const min = date.getMinutes();

    function getDayWeek() {
        let dayWeekText;

        switch(dayWeek) {
            case 0:
                dayWeekText = `Domingo`;
                return dayWeekText;
            case 1:
                dayWeekText = `Segunda-Feira`;
                return dayWeekText;
            case 2:
                dayWeekText = `Terça-Feira`;
                return dayWeekText;
            case 3:
                dayWeekText = `Quarta-Feira`;
                return dayWeekText;
            case 4:
                dayWeekText = `Quinta-Feira`;
                return dayWeekText;
            case 5:
                dayWeekText = `Sexta-Feira`;
                return dayWeekText;
            case 6:
                dayWeekText = `Sábado`;
                return dayWeekText;
            default:
                dayWeekText = `Data inválida`;
                return dayWeekText;
        }
    }
    function getMonth() {
        let monthText;

        switch(month) {
            case 1:
                monthText = `Janeiro`;
                return monthText;
            case 2:
                monthText = `Fevereiro`;
                return monthText;
            case 3:
                monthText = `Março`;
                return monthText;
            case 4:
                monthText = `Abril`;
                return monthText;
            case 5:
                monthText = `Maio`;
                return monthText;
            case 6:
                monthText = `Junho`;
                return monthText;
            case 7:
                monthText = `Julho`;
                return monthText;
            case 8:
                monthText = `Agosto`;
                return monthText;
            case 9:
                monthText = `Setembro`;
                return monthText;
            case 10:
                monthText = `Outubro`;
                return monthText;
            case 11:
                monthText = `Novembro`;
                return monthText;
            case 12:
                monthText = `Dezembro`;
                return monthText;
            default:
                monthText = `Mês Inválido`;
                return monthText;
        }
    }
    function zeroLeft(num) {
        return num >= 10 ? num : `0${num}`;
    }

    title.innerHTML = `${getDayWeek()}, ${day} de ${getMonth()} de ${year} ${zeroLeft(hours)}:${zeroLeft(min)}`;
}
data();