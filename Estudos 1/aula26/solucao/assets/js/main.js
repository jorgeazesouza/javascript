// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

// Adicionar um observador para o submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar que envie o formulário

  const inputPeso = e.target.querySelector('#peso'); // target informa o elemento que está recebendo o evento
  const inputAltura = e.target.querySelector('#altura');

  // Convertendo valor dos inputs para number e armazenando
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Se retornar NaN - peso = number = true - !peso = NaN = false
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }
  // Se retornar NaN - altura = number = true - !altura = NaN = false
  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura); // variável com a função que calcula o imc
  const nivelImc = getNivelImc(imc); // variável com a função que pega o nível do imc

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; // Criando a mensagem

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // Lista com os valores

  // Condições para retornar os valores
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// Função que calcula o imc
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// Funçãp que cria um parágrafo
function criaP () {
  const p = document.createElement('p');
  return p;
}

// Função que seta o resultado
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  // verificar se é valido ou não
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  // Adiciona o parágrafo no reulstado
  p.innerHTML = msg;
  resultado.appendChild(p);
}
