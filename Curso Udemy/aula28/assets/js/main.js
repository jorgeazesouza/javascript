function escopo() {
    const form = document.querySelector('.form');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const resposta = document.querySelector('.resposta');

    // Indice           0                 1              2            3                   4                   5
    const resultado = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    function eventoForm(evento) {
        evento.preventDefault();
        // Convertendo valor em Number
        const pesoValor = Number(peso.value);
        const alturaValor = Number(altura.value);

        // Calculo do IMC
        const imc = (pesoValor) / (alturaValor ** 2)

        if (pesoValor == 0) {
            resposta.style.backgroundColor = "#ff000071";
            return resposta.innerHTML = `Peso Inválido`;
        } else if (alturaValor == 0) {
            resposta.style.backgroundColor = "#ff000071";
            return resposta.innerHTML = `Alutra Inválida`;
        }
        resposta.style.backgroundColor = "#48ff0071";

        // Resultado
        if (imc < 18.5) { // Menor do que 18,5
            // Abaixo do Peso
            return resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${resultado[0]})`;
        } else if (imc < 25) { // Entre 18,5 e 24,9
            // Peso Normal
            return resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${resultado[1]})`;
        } else if (imc < 30) { // Entre 25 e 29,9
            // Sobrepeso
            return resposta.innerHTML = `Seu IMc é ${imc.toFixed(2)} (${resultado[2]})`;
        } else if (imc < 35) { // Entre 30 e 34,9
            // Obesidade grau 1
            return resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${resultado[3]})`;
        } else if (imc < 40) { // Entre 35 e 39,9
            // Obesidade grau 2
            return resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${resultado[4]})`;
        } else { // Mais do que 40
            // Obesidade grau 3
            return resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${resultado[5]})`;
        }
    }

    // Faz a função funcionar quando enviar o formulario
    form.addEventListener('submit', eventoForm);
}
escopo();
