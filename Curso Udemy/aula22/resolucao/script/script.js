// Criando função para variáveis não interferirem no escopo global
function meuEscopo() {
    const form = document.querySelector('.form'); // pegando formulario
    const resultado = document.querySelector('.resultado'); // pegando div para resultado
    const pessoas = []; // array vazio para armazenar os objetos

    // função para executar quando clicar no botão de enviar
    function recebeEventoForm(evento) {
        evento.preventDefault(); // previnir que o formulário seja enviado

        // vairiaveis que recebem os inputs do html
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Adiciono no final do array um objeto com os valores dos inputs
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    // addEventListener() - função que adiciona um observador de eventos (evento que irá observar, função que irá execultar)
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo(); // Executa função