const containerDiv = document.querySelector('.container div');
const elements = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

let tag;
let texto;

for (let i = 0; i < elements.length; i++) {
    tag = elements[i].tag;
    texto = elements[i].texto;

    containerDiv.innerHTML += `<${tag}>${texto}</${tag}>`;
}
