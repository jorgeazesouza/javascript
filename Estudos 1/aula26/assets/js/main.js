const form = document.querySelector('#form'); // Armazena o formulário inteiro
const res = document.querySelector('#res'); // Armazena a div para minha resposta

// Adiciona um observador para meu formulário e recebe uma função que ira execultar tudo
form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Função evita que o formulário seja enviado

    // Buscando na variável form que está armazenando o formulário
    const peso = form.querySelector('#peso'); // Variável para armazenar o peso
    const altura = form.querySelector('#altura'); // Variável para armazenar a altura

    // Criando um objeto para armazenar os valores dos inputs peso e altura
    const dado = {
        peso: Number(peso.value), // Armazenando o valor de peso e convertendo para number
        altura: Number(altura.value) // Armazenando o valor de altura e convertendo para number
    };
    
    // Calculo do IMC
    const calculo = calc(0) // definindo o valor da minha função calc como 0
    function calc() {
        calc = dado.peso / (dado.altura ** 2);

        return calc // Retornando o calculo do IMC
    }
    
    // Calculo Resultado
    const resultado = calcRes(''); // Definindo o valor da minha função calcRes como ''
    function calcRes() { // Função para retornar a resposta do meu IMC
        if (calc < 18.5) {
            calcRes = 'Abaixo do peso';
        } else if (calc <= 24.9) {
            calcRes = 'Peso normal';
        } else if (calc <= 29.9) {
            calcRes = 'Sobrepeso';
        } else if (calc <= 34.9) {
            calcRes = 'Obesidade grau 1';
        } else if (calc <= 39.9) {
            calcRes = 'Obesidade grau 2';
        } else {
            calcRes = 'Obesidade grau 3';
        }

        return calcRes; // Retornando o valor do calcRes combase nos ifs e else
    }

    if (dado.peso === 0 && dado.altura === 0) {
        res.innerHTML = `<p class='invalido'>Dados inválido`;
    } else if (dado.peso === 0) {
        res.innerHTML = `<p class='invalido'>Peso inválido`;
    } else if (dado.altura == 0) {
        res.innerHTML = `<p class='invalido'>Altura inválida`;
    } else {
        res.innerHTML = `<p>Seu IMC é ${calculo.toFixed(2)} (${resultado})</p>`;
    }
    
    console.log(dado.peso);
    console.log(dado.altura);
});
