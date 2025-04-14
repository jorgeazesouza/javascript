// criando uma função para separar do código exterior e não conflitar com outras variáveis
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    // Array
    const pessoas = [];

    function recebeEventoForm(evento) {
        // Função para evitar que o formulário seja enviado
        evento.preventDefault();

        // Dados dos formulários
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Pegando Array adicionando com .push o objeto com os valores dos formulários
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        // fazer aparecer no console
        console.log(pessoas);

        // adicionar no html
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}.</p>`
    }

    // Adiciona um observador para meu evento
    form.addEventListener('submit', recebeEventoForm);
}
// Fazer nossa função aparecer
meuEscopo();