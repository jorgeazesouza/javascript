const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // adiciono os elementos na variavel por adtribuição via desestruturação
    let tagCriada = document.createElement(tag); // crio uma variavel que contem a tag de cada index
    tagCriada.innerHTML = texto; // adiciono na tag criada o texto de cada index
    div.appendChild(tagCriada); // adiciono a tag na div
}

container.appendChild(div); // adiciono a div com tudo dentro do container