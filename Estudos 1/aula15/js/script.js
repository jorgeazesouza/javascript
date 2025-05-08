const num = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

const raiz = (num ** 0.5).toFixed(2);
const numInt = Number.isInteger(num);
const numNan = Number.isNaN(num);
const numArrB = Math.floor(num);
const numArrC = Math.ceil(num);
const numDCasas = num.toFixed(2);

numeroTitulo.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada: ${raiz}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${numInt}</p>`;
texto.innerHTML += `<p>É NaN: ${numNan}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${numArrB}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${numArrC}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numDCasas}</p>`;