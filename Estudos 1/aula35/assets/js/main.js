const container = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

const p = elementos[0];
const div = elementos[1];
const footer = elementos[2];
const section = elementos[3];

const novoParagrafo = document.createElement(p.tag);
novoParagrafo.textContent = p.texto;

const novaDiv = document.createElement(div.tag);
novaDiv.textContent = div.texto;

const novoFooter = document.createElement(footer.tag);
novoFooter.textContent = footer.texto;

const novaSection = document.createElement(section.tag);
novaSection.textContent = section.texto;

container.appendChild(novoParagrafo);
container.appendChild(novaDiv);
container.appendChild(novoFooter);
container.appendChild(novaSection);