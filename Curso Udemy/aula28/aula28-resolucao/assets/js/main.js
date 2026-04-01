// Criar uma função para o cálculo do formulário
function calculoImc() {
    const form = document.querySelector('#form'); // Formulário
    
    // Parar evento de "submit" do formulário
    form.addEventListener('submit', function(evento) {
        evento.preventDefault; // Prevenindo evento

        // target indica qual elemento esta recebendo o evento
        const inputPeso = evento.target.querySelector('#peso'); // input de Peso
        const inputAltura = evento.target.querySelector('#altura'); // input de Altura

        const peso = Number(inputPeso.value); // valor de Peso
        const altura = Number(inputAltura.value); // valor de Altura

        // Verificando Erros
        if (!peso) {
            setResultado('Peso inválido!', false);
            return;
        } 
        
        if (!altura) {
           setResultado('Altura inválida!', false);
            return;
        }

        const imc = calcularImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `Seu imc é ${imc} (${nivelImc}).`;

        setResultado(msg, true);
    });

    // Nível do IMC
    function getNivelImc(imc) {
        const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5)  return nivel[0];
    }

    // Cálcular o IMC
    function calcularImc(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    // Função para criar Parágrafo
    function criaParagrafo() {
        const paragrafo = document.createElement('p'); // Criando um parágrafo
        return paragrafo;
    }

    // Função para adicionar um resultado
    function setResultado(mensagem, valido) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ``; // limpar HTML
        const p = criaParagrafo();

        // Cores caso seja válido ou não
        if (valido) {
            p.classList.add('paragrafo__resultado');
        } else {
            p.classList.add('bad');
        }

        p.innerHTML = mensagem;
        resultado.appendChild(p); // adicionando um elemento
    }
}
calculoImc();