// Capturar evento de Submit do Formulário
const form = document.querySelector('.form');

// Observando evento de submit
form.addEventListener('submit', function(evento) {
    evento.preventDefault;
});

function setResultado(mensagem) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p'); // Criando elemento <p>
    p.classList.add('paragrafo__resultado'); // Adicionando uma classe no <p>
    p.innerHTML = ''; // Adicionando algo ao <p>
    resultado.appendChild(p); // Inserindo o <p> no resultado
}
