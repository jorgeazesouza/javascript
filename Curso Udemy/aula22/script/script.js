// Criando função para variáveis não interferirem no escopo global
function meuEscopo() {
    const form = document.querySelector('.form'); // pegando formulario
    const resultado = document.querySelector('.resultado'); // pegando div para resultado
    const pessoas = []; // array vazio para armazenar os objetos
    /*
        // variavel.evento de enviar = função(parâmetro) { corpo }
        form.onsubmit = function(evento) {
            evento.preventDefault(); // previnir que o formulário seja enviado
        };
    */
    // função para executar quando clicar no botão de enviar
    function recebeEventoForm(evento) {
        evento.preventDefault(); // previnir que o formulário seja enviado

        // vairiaveis que recebem os inputs do html
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // função para criar objetos com os valores dos inputs
        function criaPessoa() {
            const pessoa = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            };

            return pessoa;
        }
        
        pessoas.push(criaPessoa()); // adicionando obetos no array
        const pessoasResposta = pessoas[pessoas.length - 1];
        
        resultado.innerHTML += `<p>${pessoasResposta.nome} ${pessoasResposta.sobrenome} ${pessoasResposta.peso} ${pessoasResposta.altura}</p>`;
    }

    // addEventListener() - função que adiciona um observador de eventos (evento que irá observar, função que irá execultar)
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();