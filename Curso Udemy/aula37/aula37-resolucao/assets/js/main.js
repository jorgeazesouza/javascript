const elements = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let {tag, texto} = elements[i]; // Associação via Desestruturação
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    // tagCriada.innerHTML = texto;
    // tagCriada.innerText = texto;
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);